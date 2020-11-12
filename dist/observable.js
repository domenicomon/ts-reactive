"use strict";
exports.__esModule = true;
exports.Observable = void 0;
var Observable = /** @class */ (function () {
    function Observable(value) {
        var _this = this;
        this.value = value;
        this.handlers = [];
        this.disposables = [];
        this.subscribe = function (handler, replay) {
            if (replay === void 0) { replay = false; }
            _this.handlers.push(handler);
            if (_this.value && replay) {
                handler(_this.value);
            }
            return { dispose: function () { return _this.unsubscribe(handler); } };
        };
        this.unsubscribe = function (handler) {
            _this.handlers = _this.handlers.filter(function (h) { return h != handler; });
        };
        this.dispose = function () {
            _this.handlers.splice(0, _this.handlers.length);
            _this.disposables.forEach(function (item) { return item.dispose(); });
            _this.disposables.splice(0, _this.disposables.length);
        };
        this.take = function (amount) {
            var stream = new Observable(_this.value);
            var count = 0;
            stream.disposables.push(_this.subscribe(function (v) {
                if (count <= amount) {
                    stream.update(v);
                    count += 1;
                }
                else {
                    stream.dispose();
                }
            }, true));
            return stream;
        };
        this.takeUntil = function (obs) {
            _this.disposables.push(obs.subscribe(function () {
                _this.dispose();
            }));
            return _this;
        };
        this.throttle = function (wait) {
            var s = new Observable(_this.value);
            var isCalled = false;
            var t;
            var sub = _this.subscribe(function (value) {
                if (!isCalled) {
                    s.update(value);
                    isCalled = true;
                    t = setTimeout(function () {
                        isCalled = false;
                    }, wait);
                }
            });
            s.unsubscribe = function (handler) {
                sub.dispose();
                t !== -1 && clearTimeout(t);
                s.unsubscribe(handler);
            };
            s.dispose = function () {
                sub.dispose();
                t !== -1 && clearTimeout(t);
                s.dispose();
            };
            return s;
        };
        this.debounce = function (wait) {
            var s = new Observable(_this.value);
            var t = -1;
            var sub = _this.subscribe(function (value) {
                t !== -1 && clearTimeout(t);
                t = setTimeout(function () {
                    s.update(value);
                }, wait);
            });
            s.unsubscribe = function (handler) {
                sub.dispose();
                t !== -1 && clearTimeout(t);
                s.unsubscribe(handler);
            };
            s.dispose = function () {
                sub.dispose();
                if (typeof t !== 'undefined') {
                    clearTimeout(t);
                }
                s.dispose();
            };
            return s;
        };
        this.sample = function (wait) {
            var s = new Observable(_this.value);
            var st = -1;
            var dt = -1;
            var sub = _this.subscribe(function (value) {
                dt !== -1 && clearTimeout(dt);
                if (st === -1) {
                    st = setTimeout(function () {
                        st = -1;
                        s.update(value);
                    }, wait);
                }
                dt = setTimeout(function () {
                    st !== -1 && clearTimeout(st);
                    st = -1;
                    s.update(value);
                }, wait);
            });
            s.unsubscribe = function (handler) {
                sub.dispose();
                dt !== -1 && clearTimeout(dt);
                st !== -1 && clearTimeout(st);
                s.unsubscribe(handler);
            };
            s.dispose = function () {
                sub.dispose();
                dt !== -1 && clearTimeout(dt);
                st !== -1 && clearTimeout(st);
                s.dispose();
            };
            return s;
        };
    }
    Observable.prototype.update = function (value) {
        this.value = value;
        this.handlers.forEach(function (h) { return h(value); });
        return this;
    };
    Observable.prototype.map = function (transform) {
        var obs = new Observable(transform(this.value));
        this.subscribe(function (v) { return obs.update(transform(v)); }, true);
        return obs;
    };
    return Observable;
}());
exports.Observable = Observable;
