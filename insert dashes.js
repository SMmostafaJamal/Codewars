/*Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/
function insertDash(num) {
   //code me
  let strNum = String(num)
  let str = `${strNum[0]}`
  for(let i =0; i < strNum.length-1; i++){
    for(let j = i+1; j<strNum.length; j++){
//     console.log(strNum[j], strNum[strNum.length-1])
      if(strNum[i] % 2 != 0 && strNum[j]%2 != 0){
     str +=  '-' +strNum[j] 
    }else{
      str += strNum[j] 
    }
      ++i

    }
  }
  return str
}
insertDash(454793)
// insertDash(1003567)
