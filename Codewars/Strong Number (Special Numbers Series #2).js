// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Task

// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

function strong(n) {
  n = n.toString().split('')
  let fact = []

  for(let i = 0; i < n.length; i++){
    let temp = 1;
    for(let j = 1; j <= Number(n[i]); j++){
      temp*=j
   }
    fact.push(temp)
    temp = 0
  }
  return eval(fact.join('+')) === Number(n.join('')) ? 
    "STRONG!!!!" : "Not Strong !!"
}

strong(145)
