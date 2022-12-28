declare class _FunctionCaller {
    private functionMap;
    set: (key: string, func: Function) => boolean;
    call: (key: string, ...args: any[]) => any;
    asyncCall: (key: string, ...args: any[]) => Promise<any>;
    remove: (key: string) => void;
    clear: () => void;
    hasKey: (key: string) => boolean;
    getKeys: () => IterableIterator<string>;
    getEntries: () => IterableIterator<[string, Function]>;
    getFunction: (key: string) => Function | undefined;
    getSize: () => number;
}
declare const FunctionCaller: _FunctionCaller;
export default FunctionCaller;
export declare const set: (key: string, func: Function) => boolean;
export declare const call: (key: string, ...args: any[]) => any;
export declare const asyncCall: (key: string, ...args: any[]) => Promise<any>;
export declare const remove: (key: string) => void;
export declare const clear: () => void;
export declare const hasKey: (key: string) => boolean;
export declare const getKeys: () => IterableIterator<string>;
export declare const getEntries: () => IterableIterator<[string, Function]>;
export declare const getFunction: (key: string) => Function | undefined;
export declare const getSize: () => number;
