import FunctionCaller from './index'

const _FunctionCaller = new FunctionCaller((typeof window === 'object' && window as any) || this);

describe('function-caller', () => {
    test('functionMap size', () => {
        _FunctionCaller.set('1', () => { });
        expect(_FunctionCaller.getSize()).toBe(1);
        _FunctionCaller.set('2', () => { });
        expect(_FunctionCaller.getSize()).toBe(2);
        _FunctionCaller.set('3', () => { });
        expect(_FunctionCaller.getSize()).toBe(3);
        _FunctionCaller.clear();
        expect(_FunctionCaller.getSize()).toBe(0);
    });

    test('setting successfully', () => {
        const key = 'test key';
        const testFunc = (a: number, b: number) => a + b;

        const isSuccess = _FunctionCaller.set(key, testFunc);
        expect(isSuccess).toBeTruthy()

        const func = _FunctionCaller.getFunction(key) as Function;
        expect(testFunc).toBe(func);

        _FunctionCaller.clear();
    });

    test('Duplicate settings should throw an error', () => {
        const key = 'test key';
        const testFunc = (a: number, b: number) => a + b;

        _FunctionCaller.set(key, testFunc);
        expect(() => _FunctionCaller.set(key, testFunc)).toThrow('function-caller: Key "test key" is exists');

        _FunctionCaller.clear();
    });

    test('Simple Call Function', () => {
        const key = 'test key';
        const testFunc = jest.fn();

        _FunctionCaller.set(key, testFunc);
        expect(testFunc).toBeCalledTimes(0);

        _FunctionCaller.call(key)
        expect(testFunc).toBeCalledTimes(1);

        _FunctionCaller.call(key)
        expect(testFunc).toBeCalledTimes(2);

        _FunctionCaller.clear();
    });

    test('Call Function with args', () => {
        const key1 = 'test key1';
        const testFunc1 = (a: number, b: number): number => a + b
        _FunctionCaller.set(key1, testFunc1);

        const key2 = 'test key2';
        const testFunc2 = (a: number, b: number): number => a - b
        _FunctionCaller.set(key2, testFunc2);

        expect(_FunctionCaller.call(key1, 2, 3)).toBe(5);
        expect(_FunctionCaller.call(key2, 2, 3)).toBe(-1);

        _FunctionCaller.clear();
    });

    test('Simple AsyncCall Function', () => {
        const key = 'test key';
        const testFunc = jest.fn();

        _FunctionCaller.set(key, testFunc);
        expect(testFunc).toBeCalledTimes(0);

        _FunctionCaller.asyncCall(key).then(() => {
            expect(testFunc).toBeCalledTimes(1);
        })

        _FunctionCaller.clear();
    })

    test('AsyncCall Function with args', () => {
        const key1 = 'test key1';
        const testFunc1 = (a: number, b: number): number => a + b
        _FunctionCaller.set(key1, testFunc1);

        const key2 = 'test key2';
        const testFunc2 = (a: number, b: number): number => a - b
        _FunctionCaller.set(key2, testFunc2);

        _FunctionCaller.asyncCall(key1, 2, 3).then((value: any) => {
            expect(value).toBe(5);
        })

        _FunctionCaller.asyncCall(key2, 2, 3).then((value: any) => {
            expect(value).toBe(-1);
        })

        _FunctionCaller.clear();
    });

    test('hasKey', () => {
        const key = 'test key';

        expect(_FunctionCaller.hasKey(key)).toBeFalsy()

        _FunctionCaller.set(key, () => { });
        expect(_FunctionCaller.hasKey(key)).toBeTruthy()

        _FunctionCaller.clear();
    });

    test('getKeys', () => {
        const key1 = 'test1';
        const key2 = 'test2';
        const key3 = 'test3';
        _FunctionCaller.set(key1, () => { });
        _FunctionCaller.set(key2, () => { });
        _FunctionCaller.set(key3, () => { });
        expect([..._FunctionCaller.getKeys()].length).toBe(3);
        expect([..._FunctionCaller.getKeys()]).toContain(key1);
        expect([..._FunctionCaller.getKeys()]).toContain(key2);
        expect([..._FunctionCaller.getKeys()]).toContain(key3);

        _FunctionCaller.clear();
    })

    test('getEntries', () => {
        const key1 = 'test1';
        const key2 = 'test2';
        const key3 = 'test3';
        const fun1 = () => { };
        const fun2 = () => { };
        const fun3 = () => { };
        _FunctionCaller.set(key1, fun1);
        _FunctionCaller.set(key2, fun2);
        _FunctionCaller.set(key3, fun3);
        expect([..._FunctionCaller.getEntries()].length).toBe(3);
        expect([..._FunctionCaller.getEntries()]).toEqual([[key1, fun1], [key2, fun2], [key3, fun3]])

        _FunctionCaller.clear();
    })

    test('remove', () => {
        const key1 = 'test1';
        const func1 = () => { };
        const key2 = 'test2';
        const func2 = () => { };
        _FunctionCaller.set(key1, func1);
        _FunctionCaller.set(key2, func2);

        _FunctionCaller.remove(key1);

        expect([..._FunctionCaller.getKeys()].length).toBe(1);
        expect(_FunctionCaller.hasKey(key1)).toBeFalsy();

        _FunctionCaller.clear();
    });
})