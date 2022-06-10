const eqArrays = require(`./eqArrays`);

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅️✅️✅️Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴️🔴️🔴️Assertion Failed: ${actual} !== ${expected}`;
  }
};

module.exports = assertArraysEqual;
