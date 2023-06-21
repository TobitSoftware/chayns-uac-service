export default function convertDateToProtoTimespan(date: Date | string) {
    // see https://github.com/protobuf-net/protobuf-net/blob/main/src/protobuf-net.Core/Internal/PrimaryTypeProvider.TimeSpan.cs
    // and https://github.com/protobuf-net/protobuf-net/blob/14da8b12ed5ca62d84aa16066f74349a9ee7c5d8/src/protobuf-net.Reflection/protobuf-net/bcl.proto
    // for more information regarding the timespan data structure

    return {
        value: new Date(date).getTime(),
        scale: 4 // scale 4 = ms
    };
}
