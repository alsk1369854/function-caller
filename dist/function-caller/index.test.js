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
});
//# sourceMappingURL=index.test.js.map