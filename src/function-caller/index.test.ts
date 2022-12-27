import {
    set,
    clear,
    getFunction,
    getSize
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


})