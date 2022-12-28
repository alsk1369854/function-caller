'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSize = exports.getFunction = exports.getEntries = exports.getKeys = exports.hasKey = exports.clear = exports.remove = exports.asyncCall = exports.call = exports.set = void 0;
class _FunctionCaller {
    constructor() {
        this.functionMap = new Map();
        this.set = (key, func) => {
            const keyExists = this.hasKey(key);
            if (keyExists) {
                throw new Error(`function-caller: Key "${key}" is exists`);
            }
            else {
                this.functionMap.set(key, func);
                return true;
            }
        };
        this.call = (key, ...args) => {
            const targetFunc = this.functionMap.get(key);
            if (targetFunc) {
                return targetFunc(...args);
            }
        };
        this.asyncCall = (key, ...args) => __awaiter(this, void 0, void 0, function* () {
            return this.call(key, ...args);
        });
        this.remove = (key) => {
            this.functionMap.delete(key);
        };
        this.clear = () => {
            this.functionMap.clear();
        };
        this.hasKey = (key) => {
            return this.functionMap.has(key);
        };
        this.getKeys = () => {
            return this.functionMap.keys();
        };
        this.getEntries = () => {
            return this.functionMap.entries();
        };
        this.getFunction = (key) => {
            return this.functionMap.get(key);
        };
        this.getSize = () => {
            return this.functionMap.size;
        };
    }
}
const FunctionCaller = new _FunctionCaller();
exports.default = FunctionCaller;
exports.set = FunctionCaller.set;
exports.call = FunctionCaller.call;
exports.asyncCall = FunctionCaller.asyncCall;
exports.remove = FunctionCaller.remove;
exports.clear = FunctionCaller.clear;
exports.hasKey = FunctionCaller.hasKey;
exports.getKeys = FunctionCaller.getKeys;
exports.getEntries = FunctionCaller.getEntries;
exports.getFunction = FunctionCaller.getFunction;
exports.getSize = FunctionCaller.getSize;
//# sourceMappingURL=index.js.map