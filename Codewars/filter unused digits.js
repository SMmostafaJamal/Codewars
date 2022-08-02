//Given a varying number of integer arguments, return the digits that are not present in any of them.
function unusedDigits() {
  let numList = ''
  let notPresent = ''
  for(let val in arguments){
    numList += arguments[val]
  }
  for(let i=0; i<10; i++){
    numList.indexOf(i) === -1 ? notPresent += i : false ;    
  }
  return notPresent
}
unusedDigits(12, 34, 56, 78)
