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

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅️✅️✅️Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴️🔴️🔴️Assertion Failed: ${actual} !== ${expected}`;
  }

};

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS