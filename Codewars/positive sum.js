//  given an array return sum of all positive number
// P: array, negative and positive integer
// R: should return total of positive number
// E: [1,-4,7,12] => 1 + 7 + 12 = 20
// P:

function positiveSum(arr) {
// taking a variable which have 0
  let total = 0
//   if the element is greater than 0 then add with previous number else return 0
  arr.map(el => {if(el > 0) total += el})
  return total
}
positiveSum([-1,2,3,4,-5])
