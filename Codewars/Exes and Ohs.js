
// check if the given string have same amount of 'X's and 'O's
// P: string
// R: true or false
// E: XO("ooxx") => true
// P:

// write a funtion that return true or false
function XO(str) {
//   set the string to lowercase
  str = str.toLowerCase()
//   count x's and o's
  let x = 0
  let o = 0
//   loop through the strings
  for(let i = 0; i < str.length; i++){
//    check if it's x's or o's and count 
    if(str[i] === 'x'){
      x++
    }else if(str[i] === 'o'){
      o++
    }
  }
//   return true if it's same or else false
  return x === o ? true : false

  //code here
}

XO("xxOo")
