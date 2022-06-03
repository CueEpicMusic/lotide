const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅️✅️✅️Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴️🔴️🔴️Assertion Failed: ${actual} !== ${expected}`;
  }

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
}

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)) // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)) // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)) // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)) // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS