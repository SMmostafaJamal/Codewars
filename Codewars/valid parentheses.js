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
  
  if( parens[0] === ')' || parens[parens.length-1]==='(' 
    || (parens[0] === '(' && parens[1] === ')' && parens[2] === ')')){
    return false
  }else {
    parens.map(el => {
      if(el === '('){
        left.push(el)
      }else if(el === ')'){
        right.push(el)
      }
    })
  }

  if(left.length === right.length){
    return true
  }else{
    return false    
  }

}
validParentheses( ")" )
