export default interface IFunctionCaller {
    readonly functionMap: Map<string, Function>,
    set: (key: string, func: Function) => boolean,
    call: (key: string, ...args: any[]) => any,
    asyncCall: (key: string, ...args: any[]) => Promise<any>,
    remove: (key: string) => void,
    clear: () => void,
    hasKey: (key: string) => boolean,
    getKeys: () => IterableIterator<string>,
    getEntries: () => IterableIterator<[string, Function]>,
    getFunction: (key: string) => Function | undefined,
    getSize: () => number,
}