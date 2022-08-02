/*Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.*/

function squareOrSquareRoot(array) {
  let newArray = []
   array.map(el => {
  Math.sqrt(el) % 1 === 0? newArray.push(Math.sqrt(el)): newArray.push(el*el)
  })
  
  return newArray;  
}

squareOrSquareRoot([4,3,9,7,2,1])
