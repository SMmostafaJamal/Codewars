// given a number have to make negative if it's already negative then skip
// P: integer, negative or positive, no string
// R: negative integer
// E: makeNegative(0.12); // return -0.12
// P:

// creating function that receives number
function makeNegative(num) {
//   if number is greater than 0 then return negative of that number
  return num > 0 ? -num : num
}

makeNegative(42) // -42
