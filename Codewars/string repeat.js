// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// P: an integar, a string, no other datatype, no invalid input
// R: return string, string will return the given number
// E: (6, "I")     -> "IIIIII"
// P:

// a function with param number and string
function repeatStr (n, s) {
//   repeat the string given number
  return s.repeat(n);
}
repeatStr(5, "ha ") // '#####'
