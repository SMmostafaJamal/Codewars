/*Welcome. In this kata, you are asked to square every digit of a number and co>

For example, if we run 9119 through the function, 811181 will come out, because>

Note: The function accepts an integer and returns an integer
*/

squareDigits = num => {
  return Number(String(num).split('').map(el=> Number(el)**2).join(''))

  }
squareDigits(2112)
