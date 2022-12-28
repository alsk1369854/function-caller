import FunctionCaller from "./FunctionCaller";

const _FunctionCaller: FunctionCaller = new FunctionCaller((typeof window === 'object' && window as any) || this);

export default _FunctionCaller
export const set = _FunctionCaller.set;
export const call = _FunctionCaller.call;
export const asyncCall = _FunctionCaller.asyncCall;
export const remove = _FunctionCaller.remove;
export const clear = _FunctionCaller.clear;
export const hasKey = _FunctionCaller.hasKey;
export const getKeys = _FunctionCaller.getKeys;
export const getEntries = _FunctionCaller.getEntries;
export const getFunction = _FunctionCaller.getFunction;
export const getSize = _FunctionCaller.getSize;