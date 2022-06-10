# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cueepicmusic/lotide`

**Require it:**

`const _ = require('@cueepicmusic/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: this function compares two strings or numbers and returns an assertion message of pass or fail
* `head(arr)`: this function takes in an array and returns the first value of that array
* `tail(arr)`: this function takes in an array and returns everything but the first value of that array
* `eqArrays(arr)`: this function compares two arrays and checks that the value and type are equal
* `assertArraysEqual(actual, expected)`: this function implements the function `eqArrays(arr)` to check whether the two arrays are equal, then returns an assertion message of pass or fail
* `without(source, itemsToRemove)`: this function takes in an array and returns an array with the value(s) removed specified by itemsToRemove
* `flatten(arrays)`: this function takes in an array and returns an array with the sub-arrays concatenated up to 1 level
* `middle(arrays)`: this function takes in an array and returns an array with the value(s) in the middle of the array depending on whether the array is of even or odd length
* `countOnly(allItems, itemsToCount)`: this function takes in an array and returns an object with the number of times a specified item appears in the array
* `countLetters(allItmes)`: this function takes in a string and returns an object with the number of times each item appears in the string
* `letterPositions(sentence)`: this function takes in a string and returns an object with the index position(s)
* `findKeyByValue(tvShowAndGenre, tvShow)`: this function takes in a object and compares the value of each key value pair with the specified value, if it finds a match it will return the key
* `eqObjects(object1, object2)`: this function takes in an object and compares it with another object to see if they are equal, first it checks the length of the objects keys, then checks if the values are an array and compares them using the `eqArrays(arr)` function, if it isn't an array then it checks if the values match, this function outputs a boolean
* `assertObjectsEqual(actual, expected)`: this function compares two objects and implements the function `eqObjects(object1, object2)` to check whether the two objects are equal, then returns an assertion message of pass or fail
* `map(array, callback)`: this function takes an array and iterates through each item, uses the callback function which returns the item at index[0] of each item, this function will return an array of these items
* `takeUntil(array, callback)`: this function takes an array and iterates through each item and pushes them into another array, uses the callback function which checks if the item in the array is equal to the specified item, and if it does, return the new array
* `findKey(array, callback)`: this function takes an object and iterates through each object within the object, uses the callback function which checks if the value's key's value is equal to a specified amount, and then return the key it is attached to