function duplicateEncode(word){
    // ...
  const wordArr = word.toLowerCase().split("")
const duplicates = []
// loop through the word
  for(let i = 0; i < wordArr.length; i++){
//   check if a letter exists twice
    for(let j = i+1; j < wordArr.length; j++) {
//   if it's exists then store into an arr called duplicate 
      if(wordArr[i] === wordArr[j]) {
        duplicates.push(wordArr[i])
      }
    }
  }
//   split the word
  return wordArr.map((l) => duplicates.includes(l) ? ")" : "(" ).join('')
//   check if the letter included in the duplicate array then print ) or else (
}
duplicateEncode("recede")