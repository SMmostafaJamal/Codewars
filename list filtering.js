// create a function that takes a list of non-negative integers and strings and return a new list with positive integers 
// P: array, with string and integer mixed
// R: return filtered integer list
// E: filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// P: 
// create a function
function filter_list(l) {
//   filter out the integers
  return l.filter(el=> Number.isInteger(el))
}

filter_list([1,2,'a','b']) //[1,2]
