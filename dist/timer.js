"use strict";var __extends=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();exports.__esModule=!0,exports.Timer=void 0;var observable_1=require("./observable"),Timer=function(t){function e(e){var o=t.call(this)||this;return o.dispose=function(){t.prototype.dispose.call(o),o.t&&window.clearTimeout(o.t)},o.t=setTimeout((function(){o.update()})),o}return __extends(e,t),e}(observable_1.Observable);exports.Timer=Timer;