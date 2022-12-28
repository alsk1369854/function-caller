import {
    set,
    clear,
    getFunction,
    getSize,
    call,
    asyncCall,
    hasKey,
} from './index'
const fun = () => {
    throw new Error('a')
}

describe('function-caller', () => {
    test('functionMap size', () => {
        set('1', () => { });
        expect(getSize()).toBe(1);
        set('2', () => { });
        expect(getSize()).toBe(2);
        set('3', () => { });
        expect(getSize()).toBe(3);
        clear();
        expect(getSize()).toBe(0);
    });

    test('setting successfully', () => {
        const key = 'test key';
        const testFunc = (a: number, b: number) => a + b;

        set(key, testFunc);
        const expected = getFunction(key) as Function;

        expect(testFunc).toBe(expected);
        clear();
    });

    test('Duplicate settings should throw an error', () => {
        const key = 'test key';
        const testFunc = (a: number, b: number) => a + b;

        set(key, testFunc);
        expect(() => set(key, testFunc)).toThrow('function-caller: Key "test key" is exists');

        clear();
    });

    test('Simple Call Function', () => {
        const key = 'test key';
        const testFunc = jest.fn();

        set(key, testFunc);
        expect(testFunc).toBeCalledTimes(0);

        call(key)
        expect(testFunc).toBeCalledTimes(1);

        call(key)
        expect(testFunc).toBeCalledTimes(2);

        clear();
    });

    test('Call Function with args', () => {
        const key1 = 'test key1';
        const testFunc1 = (a: number, b: number): number => a + b
        set(key1, testFunc1);

        const key2 = 'test key2';
        const testFunc2 = (a: number, b: number): number => a - b
        set(key2, testFunc2);

        expect(call(key1, 2, 3)).toBe(5);
        expect(call(key2, 2, 3)).toBe(-1);

        clear();
    });

    test('Simple AsyncCall Function', () => {
        const key = 'test key';
        const testFunc = jest.fn();

        set(key, testFunc);
        expect(testFunc).toBeCalledTimes(0);

        asyncCall(key).then(() => {
            expect(testFunc).toBeCalledTimes(1);
        })

        clear();
    })

    test('AsyncCall Function with args', () => {
        const key1 = 'test key1';
        const testFunc1 = (a: number, b: number): number => a + b
        set(key1, testFunc1);

        const key2 = 'test key2';
        const testFunc2 = (a: number, b: number): number => a - b
        set(key2, testFunc2);

        asyncCall(key1, 2, 3).then((value: any) => {
            expect(value).toBe(5);
        })

        asyncCall(key2, 2, 3).then((value: any) => {
            expect(value).toBe(-1);
        })

        clear();
    });

    test('hasKey', ()=>{
        const key = 'test key';

        expect(hasKey(key)).toBeFalsy()

        set(key, ()=>{});
        expect(hasKey(key)).toBeTruthy()

        clear();
    });

})