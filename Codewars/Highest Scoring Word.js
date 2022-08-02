/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/


function high(x){
  let alphas = 'abcdefghijklmnopqrstuvwxyz'
  let points = []
  x = x.split(' ')

  x.map(el => {
    let total = 0
    for(let i = 0; i < el.length; i++){
      total += (alphas.indexOf(el[i])) + 1
    } 
    points.push(total)
    total = 0
  })
  return x[points.indexOf(Math.max(...points))]
}
high('aaa b')
