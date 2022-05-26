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

const assertEqual = function(actual, expected) {
  if (without(actual, expected)) {
    return `✅️✅️✅️Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴️🔴️🔴️Assertion Failed: ${actual} !== ${expected}`;
  }

};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]