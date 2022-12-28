"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _functionCaller = require("./function-caller");
Object.keys(_functionCaller).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _functionCaller[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _functionCaller[key];
    }
  });
});
//# sourceMappingURL=index.js.map