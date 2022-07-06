/*Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit>

  16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digital_root(n) {
  let store= [eval(String(n).split('').join('+'))]

  for(let i = 0; i <= String(n).length; i++){
    if(String(store[store.length - 1]).length != 1){
      store.push(eval(String(store[store.length - 1]).split('').join('+')))
    }
  }
  return store[store.length-1]
}
