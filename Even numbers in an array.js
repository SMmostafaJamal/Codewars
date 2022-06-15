// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// P: array of number (negative and positive), last number of array 
// R: last array of numbers
// E: ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// P:
function evenNumbers(array, number) {
//   filter the even number from the given array and show the last numbers of filtered  array
  return array.filter(el => el % 2 === 0 ).splice(-number)

  }
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
