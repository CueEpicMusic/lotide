const eqArrays = require(`./eqArrays`);

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let object1keys = Object.keys(object1);
  let object2keys = Object.keys(object2);
  if (object1keys.length !== object2keys.length) {
    return false;
  }
  for (const key of object1keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
