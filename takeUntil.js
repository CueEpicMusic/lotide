const takeUntil = (array, callback) => {
  const result = []
  for (const item of array) {
    if (callback(item)) {
      return result
    } 
    result.push(item)
  }
}

const eqArrays = function(a, b) {
  if (a.length != b.length) {
    return false;
  } else {
    for (i in a) {
      if (a[i] !== b[i]) {
        return false
      }
    }
    return true
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅️✅️✅️Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴️🔴️🔴️Assertion Failed: ${actual} !== ${expected}`;
  }

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]