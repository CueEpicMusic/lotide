function without(source, itemsToRemove) {
  const result = []

  for(let num of source) {
    // if finds it return 1 if not -1
    const index = itemsToRemove.indexOf(num)
    if(index < 0) {

      result.push(num)
    }
  }
  return result
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

console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3])) // => [2, 3]
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2'])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));