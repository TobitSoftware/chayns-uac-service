/**
 * This script uses the .proto files inside the ./src/proto directory to generate
 * static protobuf-Models which could be used to serialize/deserialize the requests/responses.
 * It also generates typescript definitions for these models.
 */

import * as url from 'node:url';
import * as path from 'node:path';

import pbts from 'protobufjs-cli/pbts.js';
import pbjs from 'protobufjs-cli/pbjs.js';

try {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const compiledPath = path.resolve(__dirname, '..', 'src', 'proto-build');
    const compiledFilePath = path.resolve(compiledPath, 'compiled.js');
    const typesFilePath = path.resolve(compiledPath, 'compiled.d.ts');

    const protoDirectoryPath = path.resolve(__dirname, '..', 'src', 'proto');

    const protoSourceFiles = path.join(protoDirectoryPath, '*.proto').replaceAll(path.sep, '/');

    await new Promise((resolve, reject) => {
        pbjs.main(["-t", "static-module", "-o", compiledFilePath, "--no-convert", "--no-verify", "--no-delimited", "--no-beautify", "-w", "commonjs", protoSourceFiles], function(err, output) { // "--no-convert","--no-verify","--no-delimited","--no-beautify","--no-comments", "--no-service"
            if (err) {
                return reject(err);
            }

            resolve(output);
        });
    });

    await new Promise((resolve, reject) => {
        pbts.main(["-o", typesFilePath, compiledFilePath], function(err, output) {
            if (err) {
                return reject(err);
            }

            resolve(output);
        });
    });
} catch (e) {
    console.error(e);
    throw e;
}
