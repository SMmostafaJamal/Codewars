//Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  // your code here
  let oddNumber = [];

  for(let i = 1; i < n; i++){  
    if(i % 2 !== 0){
      oddNumber.push(i)
    }
  } 
  return oddNumber.length
  
}

oddCount(15)

