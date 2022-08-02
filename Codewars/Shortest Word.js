// given a string of words have to return the length of shortest word and string will never be empty
// P: string
// R: integer, counting the shortest word of a string
// E: "bitcoin take over the world maybe who knows perhaps" => 3
// P: 

// create a function that returns the shortest word length
function findShort(s){
//   split the string by space
  s = s.split(' ');
//   make a variable that holds the shortest word length
  let shortestWordLen = s[0].length;
//   loop through the array and check the length is smaller than the variable
  s.forEach(el=> { 
    if(el.length < shortestWordLen){
      shortestWordLen = 0
      shortestWordLen += el.length
    }
  })
  return shortestWordLen
}

findShort("turns out random test cases are easier than writing out basic ones") // 3
