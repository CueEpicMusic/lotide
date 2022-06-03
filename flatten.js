const flatten = function(arrays) {
  let newArr = [];
  newArr = arrays.flat(1)
  return newArr
};

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

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])) // => [1, 2, 3, 4, 5, 6]