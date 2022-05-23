const flatten = function(arrays) {
  let newArr = [];
  newArr = arrays.flat(1)
  return newArr
};


console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]