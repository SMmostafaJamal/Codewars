//  writing a function for accum

// P: string, no integar
// R: string with first letter is cap and will use '-' in each letter and increase one letter on each letter
// E: accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// P:

// a function which receives string
function accum(s) {
//   split each letter loop through each letter and use uppercase & increase one letter in each loop join by'-'
  return s.toLowerCase().split('').map((el,i)=> el.toUpperCase()+(el.repeat(i))).join('-')
}

accum("RqaEzty") // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
