const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const expected = typeof sum;
assert.strictEqual(expected, 'function');

const expected1 = sum(4, 5);
assert.strictEqual(expected1, 9, '4 + 5 = 9');

const expected2 = sum(0, 0); 
assert.strictEqual(expected2, 0, '0 + 0 = 0');

assert.throws(() => {
  sum(4, '5');
});

assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);