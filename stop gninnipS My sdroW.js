// takes a string if string is greater than 5 then reverse the word and return the sentence
// P: string
// R: string with reverse words
// E: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
  //TODO Have fun :)
//  split the sentense and if greater than 5 split the letter and reverse and join or else return the word as it is
  return string.split(' ').map(el=> (el.length >= 5) ?  el.split('').reverse().join('') :  el).join(' ')

}

// spinWords("Welcome") //emocleW
 spinWords("Hey fellow warriors") //Hey wollef sroirraw
