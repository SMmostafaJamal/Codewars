// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
//   word = String(str)
  revWord=''
  for(i = str.length - 1; i >= 0  ; i--){
    revWord += str[i];
  }
  return revWord;
}
solution('world')