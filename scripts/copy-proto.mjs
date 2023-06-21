/**
 * This files copies the generated typescript definition files inside the
 * output directories.
 * This is necessary, because TypeScript only checks the
 * generated files on compile time, but does not use it for generating the
 * outputted TypeScript-declaration files.
 */

import fs from 'node:fs/promises';
import * as path from 'node:path';
import url from 'node:url';

try {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const sourceTypeDefinition = path.resolve(__dirname, '..', 'src', 'proto-build', 'compiled.d.ts');
    const libPath = path.resolve(__dirname, '..', 'lib')
    const esmOutPath = path.resolve(libPath, 'esm');
    const cjsOutPath = path.resolve(libPath, 'cjs');

    await fs.copyFile(sourceTypeDefinition, path.resolve(esmOutPath, 'proto-build', 'compiled.d.ts'));
    await fs.copyFile(sourceTypeDefinition, path.resolve(cjsOutPath, 'proto-build', 'compiled.d.ts'));
} catch (e) {
    console.error(e);
    throw e;
}
