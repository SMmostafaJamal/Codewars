// Given an integral number, determine if it's a square number or not
// P: int, positibe and negative, not string
// R: true or false
// E: -1  =>  false, 0  =>  true, 3  =>  false, 4  =>  true, 25  =>  true, 26  =>  false

// create a function to check if it's square or not;

var isSquare = function(n){
//   square root the number 
//   check if the square root is decimal number then return false or else true
  return Math.sqrt(n) % 1 !== 0 ? false : true 
};

isSquare(-1); // true
