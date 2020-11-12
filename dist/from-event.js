"use strict";
exports.__esModule = true;
exports.fromEvent = void 0;
var observable_1 = require("./observable");
function fromEvent(element, eventName, listenerOptions) {
    var obs = new observable_1.Observable();
    var eventListener = function (event) {
        obs.update(event);
    };
    element.addEventListener(eventName, eventListener, listenerOptions);
    obs.unsubscribe = function (handler) {
        obs.unsubscribe(handler);
        element.removeEventListener(eventName, eventListener, listenerOptions);
    };
    obs.dispose = function () {
        obs.dispose();
        element.removeEventListener(eventName, eventListener, listenerOptions);
    };
    return obs;
}
exports.fromEvent = fromEvent;
