/*Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
*/
var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
let age = [0,0,0] 
let cal = []  
    
  age.map((el, i) => {
              i === 0 ? cal.push(el + humanYears) 
             : (i === 1 || i === 2) && humanYears === 1 ? cal.push(el  + 15)
             : (i === 1 || i === 2) && humanYears === 2 ? cal.push(el  + 15 + 9)
             : i === 1  && humanYears > 2 ? cal.push(el +  15 + humanYears * 4 + 1)
              :i === 2 && humanYears > 2 ? cal.push(el +  15 + humanYears * 5 - 1)
              : false
                     })
  return cal
}
humanYearsCatYearsDogYears(2)
