const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅️✅️✅️Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴️🔴️🔴️Assertion Failed: ${actual} !== ${expected}`;
  }

};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const countOnly = function(allItems, itemsToCount) {
  const results = {};

  //1. We go through all the items in the Allitems parameter
  for (const item of allItems) {

    //2. If the name is having a true value in the second Parameter
    if(itemsToCount[item] === true) {
      //3. To check whether the Item is already there in the Results object
      if(results[item]) { //if it's already there
        results[item] += 1
      } else {
        results[item] = 1 //if the key was not there, then create it and assign 1 to it
      }
    }

  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));