"use strict";var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();exports.__esModule=!0,exports.Timer=void 0;var observable_1=require("./observable"),Timer=function(t){function e(e){var r=t.call(this)||this;return r.time=e,r.dispose=function(){t.prototype.dispose.call(r),r.t&&window.clearTimeout(r.t)},r}return __extends(e,t),e.prototype.subscribe=function(e){var r=this;return this.t=setTimeout((function(){r.update()}),this.time),t.prototype.subscribe.call(this,e,!1)},e}(observable_1.Observable);exports.Timer=Timer;