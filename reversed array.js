/*Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.*/


function digitize(n) {
  //code here
  n = String(n)
  let revArr = []
  for(let i = n.length-1 ; i >= 0 ; i--){
    revArr.push(Number(n[i]))
  }
  return revArr

}
digitize(35231)
