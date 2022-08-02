// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
//
// Square all numbers k (0 <= k <= n) between 0 and n.
//
// Count the numbers of digits d used in the writing of all the k**2.
//
// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
function nbDig(n, d) {
    // your code
    let kSquare = [];
    let count = 0;
    if(n >=0 && d >=0  && d <=9){
      for(let k=0; k <= n; k++ ){
           kSquare.push(k*k)
      }
      for(let i=0; i <= kSquare.length - 1; i++){
         let numbers = String(kSquare[i])

          for(let j=0; j <= numbers.length - 1; j++){
            if(Number(numbers[j]) === d){
              count += 1
            }
          }
        }
    }
  return count
}
nbDig(12224, 8)
