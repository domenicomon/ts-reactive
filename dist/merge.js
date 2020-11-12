"use strict";
exports.__esModule = true;
exports.merge = void 0;
var observable_1 = require("./observable");
// this is type-unsafe but typesafety is ensured above :)
function merge(streams) {
    var stream = new observable_1.Observable();
    streams.forEach(function (s, i) {
        var subs = [];
        subs.push(s.subscribe(function (value) {
            stream.update(value);
        }));
        stream.disposables = stream.disposables.concat(subs);
        stream.unsubscribe = function (handler) {
            subs.forEach(function (item) { return item.dispose(); });
            stream.unsubscribe(handler);
        };
    });
    return stream;
}
exports.merge = merge;
