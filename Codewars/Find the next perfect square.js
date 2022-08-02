/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

 */
function findNextSquare(sq) {
//   root the given number check if its a natural number if it is than return by adding one to the result and square it or return -1
  return Math.sqrt(sq) % 1 == 0? (Math.sqrt(sq)+1)**2 : -1
}

findNextSquare(121)
