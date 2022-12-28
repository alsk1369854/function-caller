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
// const functionMap: Map<string, Function> = new Map();
// export const set = (key: string, func: Function): boolean => {
//     const keyExists: boolean = hasKey(key);
//     if (keyExists) {
//         throw new Error(`function-caller: Key "${key}" is exists`);
//     } else {
//         functionMap.set(key, func);
//         return true;
//     }
// }
// export const getSize = (): number => {
//     return functionMap.size
// }
// export const clear = (): void => {
//     functionMap.clear()
// }
// export const getFunction = (key: string): Function | undefined => {
//     return functionMap.get(key)
// }
// export const call = (key: string, ...args: any[]): any => {
//     const targetFunc = functionMap.get(key);
//     if (targetFunc) {
//         return targetFunc(...args);
//     }
// }
// export const asyncCall = async (key: string, ...args: any[]): Promise<any> => {
//     return call(key, ...args);
// }
// export const hasKey = (key: string) => {
//     return functionMap.has(key);
// }
// export const getKeys = (): IterableIterator<string> => {
//     return functionMap.keys();
// }
// export const getEntries = (): IterableIterator<[string, Function]> => {
//     return functionMap.entries()
// }
// export const remove = (key: string): void => {
//     functionMap.delete(key);
// }
class FunctionCaller {
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
        this.getSize = () => {
            return this.functionMap.size;
        };
        this.clear = () => {
            this.functionMap.clear();
        };
        this.getFunction = (key) => {
            return this.functionMap.get(key);
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
        this.hasKey = (key) => {
            return this.functionMap.has(key);
        };
        this.getKeys = () => {
            return this.functionMap.keys();
        };
        this.getEntries = () => {
            return this.functionMap.entries();
        };
        this.remove = (key) => {
            this.functionMap.delete(key);
        };
    }
}
const _FunctionCaller = new FunctionCaller();
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