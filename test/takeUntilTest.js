const index = require('../index');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = index.takeUntil(data1, x => x < 0);
// console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = index.takeUntil(data2, x => x === ',');
// console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));

describe(`#takeUntil`, () => {
  it(`return [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]`, () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it(`return ['I've', 'been', 'to', 'Hollywood'] for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']`, () => {
    assert.deepEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
  });
});