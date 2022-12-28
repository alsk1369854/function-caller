"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.remove = exports.hasKey = exports.getSize = exports.getKeys = exports.getFunction = exports.getEntries = exports.default = exports.clear = exports.call = exports.asyncCall = void 0;
var _FunctionCaller2 = _interopRequireDefault(require("./FunctionCaller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _FunctionCaller = new _FunctionCaller2.default((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window || void 0);
var _default = _FunctionCaller;
exports.default = _default;
var set = _FunctionCaller.set;
exports.set = set;
var call = _FunctionCaller.call;
exports.call = call;
var asyncCall = _FunctionCaller.asyncCall;
exports.asyncCall = asyncCall;
var remove = _FunctionCaller.remove;
exports.remove = remove;
var clear = _FunctionCaller.clear;
exports.clear = clear;
var hasKey = _FunctionCaller.hasKey;
exports.hasKey = hasKey;
var getKeys = _FunctionCaller.getKeys;
exports.getKeys = getKeys;
var getEntries = _FunctionCaller.getEntries;
exports.getEntries = getEntries;
var getFunction = _FunctionCaller.getFunction;
exports.getFunction = getFunction;
var getSize = _FunctionCaller.getSize;
exports.getSize = getSize;
//# sourceMappingURL=index.js.map