// moves all the zeros of an array without losing the order of the other elements

// P: string? boolean ?negative numbers? decimal values?
// R: console? 
// E: moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
// P:
function moveZeros(arr) {
//   filter out without zeros and concat with zeros filtered array
  return arr.filter(el=> el !== 0 ).concat(arr.filter(el=> el === 0 ))
  
}
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
