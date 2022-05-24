const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual)=== JSON.stringify(expected)) {
    return `✅️✅️✅️Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`;
  } else {
    return `🔴️🔴️🔴️Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`;
  }

};

const countLetters = function(allItems) {
  const results = {};

  //1. We go through all the items in the allitems parameter
  for (const item of allItems) {
      if(item !== ' ')
      //2. To check whether the Item is already there in the Results object
      if(results[item]) { //if it's already there
        results[item] += 1
      } else {
        results[item] = 1 //if the key was not there, then create it and assign 1 to it
      }
  }
  return results;
}

console.log(assertEqual(countLetters('LHL'), {L: 2, H: 1}))
console.log(countLetters('lighthouse in the house'))
