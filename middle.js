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

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]]
  }
};

console.log(assertArraysEqual(middle([1]), [])) // => []
console.log(assertArraysEqual(middle([1, 2]), [])) // => []
console.log(assertArraysEqual(middle([1, 2, 3]), [2])) // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])) // => [3]
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])) // => [3, 4]