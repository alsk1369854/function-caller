'use strict'

class _FunctionCaller {
    private functionMap: Map<string, Function> = new Map();

    set = (key: string, func: Function): boolean => {
        const keyExists: boolean = this.hasKey(key);

        if (keyExists) {
            throw new Error(`function-caller: Key "${key}" is exists`);
        } else {
            this.functionMap.set(key, func);
            return true;
        }
    }

    call = (key: string, ...args: any[]): any => {
        const targetFunc = this.functionMap.get(key);

        if (targetFunc) {
            return targetFunc(...args);
        }
    }

    asyncCall = async (key: string, ...args: any[]): Promise<any> => {
        return this.call(key, ...args);
    }

    remove = (key: string): void => {
        this.functionMap.delete(key);
    }

    clear = (): void => {
        this.functionMap.clear()
    }

    hasKey = (key: string) => {
        return this.functionMap.has(key);
    }

    getKeys = (): IterableIterator<string> => {
        return this.functionMap.keys();
    }

    getEntries = (): IterableIterator<[string, Function]> => {
        return this.functionMap.entries()
    }

    getFunction = (key: string): Function | undefined => {
        return this.functionMap.get(key)
    }

    getSize = (): number => {
        return this.functionMap.size
    }
}

const FunctionCaller = new _FunctionCaller();
export default FunctionCaller
export const set = FunctionCaller.set;
export const call = FunctionCaller.call;
export const asyncCall = FunctionCaller.asyncCall;
export const remove = FunctionCaller.remove;
export const clear = FunctionCaller.clear;
export const hasKey = FunctionCaller.hasKey;
export const getKeys = FunctionCaller.getKeys;
export const getEntries = FunctionCaller.getEntries;
export const getFunction = FunctionCaller.getFunction;
export const getSize = FunctionCaller.getSize;