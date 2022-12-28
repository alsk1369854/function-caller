import FunctionCaller from './index'

describe('function-caller', () => {
    test('functionMap size', () => {
        FunctionCaller.set('1', () => { });
        expect(FunctionCaller.getSize()).toBe(1);
        FunctionCaller.set('2', () => { });
        expect(FunctionCaller.getSize()).toBe(2);
        FunctionCaller.set('3', () => { });
        expect(FunctionCaller.getSize()).toBe(3);
        FunctionCaller.clear();
        expect(FunctionCaller.getSize()).toBe(0);
    });

    test('setting successfully', () => {
        const key = 'test key';
        const testFunc = (a: number, b: number) => a + b;

        const isSuccess = FunctionCaller.set(key, testFunc);
        expect(isSuccess).toBeTruthy()

        const func = FunctionCaller.getFunction(key) as Function;
        expect(testFunc).toBe(func);

        FunctionCaller.clear();
    });

    test('Duplicate settings should throw an error', () => {
        const key = 'test key';
        const testFunc = (a: number, b: number) => a + b;

        FunctionCaller.set(key, testFunc);
        expect(() => FunctionCaller.set(key, testFunc)).toThrow('function-caller: Key "test key" is exists');

        FunctionCaller.clear();
    });

    test('Simple Call Function', () => {
        const key = 'test key';
        const testFunc = jest.fn();

        FunctionCaller.set(key, testFunc);
        expect(testFunc).toBeCalledTimes(0);

        FunctionCaller.call(key)
        expect(testFunc).toBeCalledTimes(1);

        FunctionCaller.call(key)
        expect(testFunc).toBeCalledTimes(2);

        FunctionCaller.clear();
    });

    test('Call Function with args', () => {
        const key1 = 'test key1';
        const testFunc1 = (a: number, b: number): number => a + b
        FunctionCaller.set(key1, testFunc1);

        const key2 = 'test key2';
        const testFunc2 = (a: number, b: number): number => a - b
        FunctionCaller.set(key2, testFunc2);

        expect(FunctionCaller.call(key1, 2, 3)).toBe(5);
        expect(FunctionCaller.call(key2, 2, 3)).toBe(-1);

        FunctionCaller.clear();
    });

    test('Simple AsyncCall Function', () => {
        const key = 'test key';
        const testFunc = jest.fn();

        FunctionCaller.set(key, testFunc);
        expect(testFunc).toBeCalledTimes(0);

        FunctionCaller.asyncCall(key).then(() => {
            expect(testFunc).toBeCalledTimes(1);
        })

        FunctionCaller.clear();
    })

    test('AsyncCall Function with args', () => {
        const key1 = 'test key1';
        const testFunc1 = (a: number, b: number): number => a + b
        FunctionCaller.set(key1, testFunc1);

        const key2 = 'test key2';
        const testFunc2 = (a: number, b: number): number => a - b
        FunctionCaller.set(key2, testFunc2);

        FunctionCaller.asyncCall(key1, 2, 3).then((value: any) => {
            expect(value).toBe(5);
        })

        FunctionCaller.asyncCall(key2, 2, 3).then((value: any) => {
            expect(value).toBe(-1);
        })

        FunctionCaller.clear();
    });

    test('hasKey', () => {
        const key = 'test key';

        expect(FunctionCaller.hasKey(key)).toBeFalsy()

        FunctionCaller.set(key, () => { });
        expect(FunctionCaller.hasKey(key)).toBeTruthy()

        FunctionCaller.clear();
    });

    test('getKeys', () => {
        const key1 = 'test1';
        const key2 = 'test2';
        const key3 = 'test3';
        FunctionCaller.set(key1, () => { });
        FunctionCaller.set(key2, () => { });
        FunctionCaller.set(key3, () => { });
        expect([...FunctionCaller.getKeys()].length).toBe(3);
        expect([...FunctionCaller.getKeys()]).toContain(key1);
        expect([...FunctionCaller.getKeys()]).toContain(key2);
        expect([...FunctionCaller.getKeys()]).toContain(key3);

        FunctionCaller.clear();
    })

    test('getEntries', () => {
        const key1 = 'test1';
        const key2 = 'test2';
        const key3 = 'test3';
        const fun1 = () => { };
        const fun2 = () => { };
        const fun3 = () => { };
        FunctionCaller.set(key1, fun1);
        FunctionCaller.set(key2, fun2);
        FunctionCaller.set(key3, fun3);
        expect([...FunctionCaller.getEntries()].length).toBe(3);
        expect([...FunctionCaller.getEntries()]).toEqual([[key1, fun1], [key2, fun2], [key3, fun3]])

        FunctionCaller.clear();
    })

    test('remove', () => {
        const key1 = 'test1';
        const func1 = () => { };
        const key2 = 'test2';
        const func2 = () => { };
        FunctionCaller.set(key1, func1);
        FunctionCaller.set(key2, func2);

        FunctionCaller.remove(key1);

        expect([...FunctionCaller.getKeys()].length).toBe(1);
        expect(FunctionCaller.hasKey(key1)).toBeFalsy();

        FunctionCaller.clear();
    });
})