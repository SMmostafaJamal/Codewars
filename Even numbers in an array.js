// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// P: array of number (negative and positive), last number of array 
// R: last array of numbers
// E: ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// P:

function evenNumbers(array, number) {
// variable to store even numbers
  let n = []
//   loop through the given array and push the even number to the variable
  array.map(el => el % 2 === 0 ? n.push(el) : false)
//   return the last given number of the array
  return n.splice(-number)
}
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
