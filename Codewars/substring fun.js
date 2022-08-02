// takes an array of words and concatenate each words index number letter and make a new word 
// p: array of words
// r: return string
// e: ["yoda", "best", "has"]  -->  "yes"
//      ^        ^        ^
//      i=0     i=1     i=2

function nthChar(words){
//  making a variable to store letters
  let newWord = ''
  
//   index count variable
    let i = 0

//   loop through the array and find out the index letter by the index of the word
  for(word of words){
   newWord += word[i]
    i++
 }
//   return the new word
return newWord
}
 
 nthChar(['yoda', 'best', 'has']) //'yes'
