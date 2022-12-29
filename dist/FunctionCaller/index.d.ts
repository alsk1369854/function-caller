import IFunctionCaller from "./IFunctionCaller";
export declare class FunctionCaller implements IFunctionCaller {
    readonly functionMap: Map<string, Function>;
    constructor(root: any);
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
declare const functionCaller: FunctionCaller;
export default functionCaller;
