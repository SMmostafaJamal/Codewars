/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/


function isIsogram(str){
  str = str.split('');
  let res = []
  for(let i = 0; i < str.length; i++){
    for(let j = str.length - 1; j > i; j--){
      if(str[i].toLowerCase() === str[j].toLowerCase()){
        res.push(false)
//         return false
      }else{
        res.push(true)
      }
    }
  }
  
  if(res.includes(false)) {
    return false
  }else{
    return true
  }
}
isIsogram("moOse")
