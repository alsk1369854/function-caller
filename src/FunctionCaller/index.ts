'use strict'
import IFunctionCaller from "./IFunctionCaller";

export default class FunctionCaller implements IFunctionCaller {
    readonly functionMap: Map<string, Function> = new Map();

    constructor(root: any) {
        if(root && !root._FunctionCaller){
            root._FunctionCaller = this;
        }
    }

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
