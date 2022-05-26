/* strings of dot equation as input. In between the dots  will have an operator and 
it separates with one space in between we have to calculate the dots as the operator suggests. 
the operators are +, -, *, // */

//  P: strings eqn 
//  R: return the calculated dots, if the result is zero then i will return empty string
//  E:  "..... + ..............." => "...................."
//      "..... - ..."             => ".."

function dotCalculator (equation) {
// spliting into  three variable 
let [a,op,b] = equation.split(' ')
// if '//' then replace to divition op
  if(op === '//'){
    op = '/'
  }
// return the calculation and convert the result into dots of string
  return ''.padStart(Math.floor(eval(a.length + op + b.length)), '.')

  }

dotCalculator(".. + ..") 
