"use strict";
exports.__esModule = true;
exports.combineLatest = void 0;
var observable_1 = require("./observable");
// this is type-unsafe but typesafety is ensured above :)
function combineLatest(streams) {
    var stream = new observable_1.Observable(streams.map(function (v) { return v.value; }));
    var updated = streams.map(function () { return false; });
    streams.forEach(function (s, i) {
        var subs = [];
        subs.push(s.subscribe(function () {
            updated[i] = true;
            if (updated.every(function (item) { return item; })) {
                stream.update(streams.map(function (v) { return v.value; }));
            }
        }));
        stream.disposables = stream.disposables.concat(subs);
        stream.unsubscribe = function (handler) {
            subs.forEach(function (item) { return item.dispose(); });
            stream.unsubscribe(handler);
        };
    });
    return stream;
}
exports.combineLatest = combineLatest;
