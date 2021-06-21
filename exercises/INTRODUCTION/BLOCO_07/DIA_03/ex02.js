const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

const actual = myRemove([1, 2, 3, 4], 3)
const expected = [1, 2, 4]
const msg = 'errooou'
assert.deepStrictEqual(actual, expected, msg)

const actual2 = myRemove([1, 2, 3, 4], 3)
const expected2 = [1, 2, 3, 4]
const msg2 = 'errooou'
assert.notDeepStrictEqual(actual2, expected2, msg2)

const myList = [1, 2, 3, 4];
myRemove(myList, 4);
const exected3 = [1, 2, 3, 4];
assert.deepStrictEqual(myList, exected3)

const actual4 = myRemove([1, 2, 3, 4], 5)
const expected4 = [1, 2, 3, 4]
const msg4 = 'errooou'
assert.deepStrictEqual(actual4, expected4, msg4)