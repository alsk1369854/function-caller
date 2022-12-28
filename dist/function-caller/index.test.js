"use strict";

var _index = require("./index");
var fun = function fun() {
  throw new Error('a');
};
describe('function-caller', function () {
  test('functionMap size', function () {
    (0, _index.set)('1', function () {});
    expect((0, _index.getSize)()).toBe(1);
    (0, _index.set)('2', function () {});
    expect((0, _index.getSize)()).toBe(2);
    (0, _index.set)('3', function () {});
    expect((0, _index.getSize)()).toBe(3);
    (0, _index.clear)();
    expect((0, _index.getSize)()).toBe(0);
  });
  test('setting successfully', function () {
    var key = 'test key';
    var testFunc = function testFunc(a, b) {
      return a + b;
    };
    (0, _index.set)(key, testFunc);
    var expected = (0, _index.getFunction)(key);
    expect(testFunc).toBe(expected);
    (0, _index.clear)();
  });
  test('Duplicate settings should throw an error', function () {
    var key = 'test key';
    var testFunc = function testFunc(a, b) {
      return a + b;
    };
    (0, _index.set)(key, testFunc);
    expect(function () {
      return (0, _index.set)(key, testFunc);
    }).toThrow('function-caller: Key "test key" is exists');
    (0, _index.clear)();
  });
  test('Simple Call Function', function () {
    var key = 'test key';
    var testFunc = jest.fn();
    (0, _index.set)(key, testFunc);
    expect(testFunc).toBeCalledTimes(0);
    (0, _index.call)(key);
    expect(testFunc).toBeCalledTimes(1);
    (0, _index.call)(key);
    expect(testFunc).toBeCalledTimes(2);
    (0, _index.clear)();
  });
  test('Call Function with args', function () {
    var key1 = 'test key1';
    var testFunc1 = function testFunc1(a, b) {
      return a + b;
    };
    (0, _index.set)(key1, testFunc1);
    var key2 = 'test key2';
    var testFunc2 = function testFunc2(a, b) {
      return a - b;
    };
    (0, _index.set)(key2, testFunc2);
    expect((0, _index.call)(key1, 2, 3)).toBe(5);
    expect((0, _index.call)(key2, 2, 3)).toBe(-1);
    (0, _index.clear)();
  });
  test('Simple AsyncCall Function', function () {
    var key = 'test key';
    var testFunc = jest.fn();
    (0, _index.set)(key, testFunc);
    expect(testFunc).toBeCalledTimes(0);
    (0, _index.asyncCall)(key).then(function () {
      expect(testFunc).toBeCalledTimes(1);
    });
    (0, _index.clear)();
  });
  test('AsyncCall Function with args', function () {
    var key1 = 'test key1';
    var testFunc1 = function testFunc1(a, b) {
      return a + b;
    };
    (0, _index.set)(key1, testFunc1);
    var key2 = 'test key2';
    var testFunc2 = function testFunc2(a, b) {
      return a - b;
    };
    (0, _index.set)(key2, testFunc2);
    (0, _index.asyncCall)(key1, 2, 3).then(function (value) {
      expect(value).toBe(5);
    });
    (0, _index.asyncCall)(key2, 2, 3).then(function (value) {
      expect(value).toBe(-1);
    });
    (0, _index.clear)();
  });
  test('hasKey', function () {
    var key = 'test key';
    expect((0, _index.hasKey)(key)).toBeFalsy();
    (0, _index.set)(key, function () {});
    expect((0, _index.hasKey)(key)).toBeTruthy();
    (0, _index.clear)();
  });
});
//# sourceMappingURL=index.test.js.map