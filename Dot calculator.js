/* strings of dot equation as input. In between the dots  will have an operator and 
it separates with one space in between we have to calculate the dots as the operator suggests. 
the operators are +, -, *, // */

//  P: strings eqn 
//  R: return the calculated dots, if the result is zero then i will return empty string
//  E:  "..... + ..............." => "...................."
//      "..... - ..."             => ".."


function dotCalculator (equation) {
//   split by space 
  equation = equation.split(' ')
//   create a variable to store the result
  let result = 0
// converting the double forward to single forward slash for division
  if(equation[1] === '//'){
    equation[1] = '/'
  }
  
// calculation by using the spliting array
  (equation[1] !== '+' || '*' && 
   equation[0].length > equation[2].length) ?
   result = eval(equation[0].length + equation[1] + equation[2].length)    
  : result = eval(equation[0].length + equation[1] + equation[2].length)    
  
// transfer the result into dots and return
  return ''.padStart(Math.floor(result), '.')

  }

dotCalculator(".. + ..") // return "...."
