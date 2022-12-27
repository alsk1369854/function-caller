'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.getSize = exports.getFunction = exports.clear = void 0;
var functionMap = new Map();
var set = function set(key, func) {
  var keyExists = functionMap.get(key);
  if (keyExists) {
    throw new Error("function-caller: Key \"".concat(key, "\" is exists"));
  } else {
    functionMap.set(key, func);
    return true;
  }
};
exports.set = set;
var getSize = function getSize() {
  return functionMap.size;
};
exports.getSize = getSize;
var clear = function clear() {
  functionMap.clear();
};
exports.clear = clear;
var getFunction = function getFunction(key) {
  return functionMap.get(key);
};
exports.getFunction = getFunction;
//# sourceMappingURL=index.js.map