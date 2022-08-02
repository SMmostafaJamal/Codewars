// given a word should return the middle character of the word if it's odd return middle character if even return 2 middle character

// P: string 
// R: string, middle character
// E: Kata.getMiddle("testing") should return "t" Kata.getMiddle("middle") should return "dd"
// P:

// create a function which receives string
function getMiddle(s){
//   if its even then return two middle character or else return middle character 
  return s.length % 2 ===0 ?  s[(s.length/2)-1] + s[s.length/2]  
                    : s[Math.floor(s.length/2)]
     
  
}

getMiddle("middle") // 'dd'
getMiddle("test") // es


getMiddle("testing")
