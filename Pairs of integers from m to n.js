// P: Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.
//    The input m will always be smaller than or equal to n (e.g., m <= n)

// R: array of numbers
// E: m = 2, n = 4
//    result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)] 
// P:
function generatePairs(m, n) {
  let pairs = []
  for(let i = m; i <= n; i++){
    for(let j = i; j <=n; j++){
      pairs.push([i, j])
    }
  }
  return pairs
}
generatePairs(2, 4) //[ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]
