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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1keys = Object.keys(object1)
  let object2keys = Object.keys(object2)
  if (object1keys.length !== object2keys.length) {
    return false
  }
  for (const key of object1keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], (object2[key]))) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
          return false
        }
  }
  return true
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false