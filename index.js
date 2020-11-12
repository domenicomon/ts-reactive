"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.Observable = exports.merge = exports.fromEvent = exports.combineLatest = void 0;
var combine_latest_1 = require("./dist/combine-latest");
__createBinding(exports, combine_latest_1, "combineLatest");
var from_event_1 = require("./dist/from-event");
__createBinding(exports, from_event_1, "fromEvent");
var merge_1 = require("./dist/merge");
__createBinding(exports, merge_1, "merge");
var observable_1 = require("./dist/observable");
__createBinding(exports, observable_1, "Observable");
