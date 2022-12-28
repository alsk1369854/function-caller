'use strict'

const functionMap: Map<string, Function> = new Map()

export const set = (key: string, func: Function): boolean => {
    const keyExists: Function | undefined = functionMap.get(key);

    if (keyExists) {
        throw new Error(`function-caller: Key "${key}" is exists`);
    } else {
        functionMap.set(key, func);
        return true;
    }
}

export const getSize = (): number => {
    return functionMap.size
}

export const clear = (): void => {
    functionMap.clear()
}

export const getFunction = (key: string): Function | undefined => {
    return functionMap.get(key)
}

export const call = (key: string, ...args: any[]): any => {
    const terageFunc = functionMap.get(key);

    if (terageFunc) {
        return terageFunc(...args);
    }
}

export const asyncCall = async (key: string, ...args: any[]): Promise<any> => {
    return call(key, ...args);
}

export const hasKey = (key: string) => {
    return functionMap.has(key);
}