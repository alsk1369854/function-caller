"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSize = exports.getFunction = exports.getEntries = exports.getKeys = exports.hasKey = exports.clear = exports.remove = exports.asyncCall = exports.call = exports.set = void 0;
const FunctionCaller_1 = require("./FunctionCaller");
const _FunctionCaller = new FunctionCaller_1.default((typeof window === 'object' && window) || this);
exports.default = _FunctionCaller;
exports.set = _FunctionCaller.set;
exports.call = _FunctionCaller.call;
exports.asyncCall = _FunctionCaller.asyncCall;
exports.remove = _FunctionCaller.remove;
exports.clear = _FunctionCaller.clear;
exports.hasKey = _FunctionCaller.hasKey;
exports.getKeys = _FunctionCaller.getKeys;
exports.getEntries = _FunctionCaller.getEntries;
exports.getFunction = _FunctionCaller.getFunction;
exports.getSize = _FunctionCaller.getSize;
//# sourceMappingURL=index.js.map