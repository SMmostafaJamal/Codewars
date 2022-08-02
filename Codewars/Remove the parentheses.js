// given a string have to remove the parentheses part including inner part and return the string
// P: string
// R: return removed parenthesis string
// E: "example(unwanted thing)example" = "exampleexample"

function removeParentheses(s){
  //  find out the first index & last index of openning & closing parentheses
  let deletePortion = s.slice(s.indexOf('('), s.lastIndexOf(')')+1)
//   delete the slice portion and return
  let nS = s.replace(deletePortion, '')
//   return nS  
  
}

removeParentheses("a (bc d)e") // "exampleexample"
removeParentheses("(first group) (second group) (third group)") // "exampleexample"
