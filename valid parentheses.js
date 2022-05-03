/*Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

function validParentheses(parens) {
  parens = [...parens]
  let left = []
  let right = []
  
  .map(el => {

    if(el === '('){
      left.push(el)
    }else if(el === ')'){
      right.push(el)
    }
    
  })

  if(left.length === right.length){
    return true
  }else{
    return false
  }

}
validParentheses( "())" )
