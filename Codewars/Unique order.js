/* P: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements. */

// R: will this ever return strings? will this ever be array? will this ever return integers? will this ever return symbols?

/* E: uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
      uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
      uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

// P:
var uniqueInOrder=function(iterable){
//   if the given object is empty then return as array
  if(iterable.length == 0) return Array.from(iterable)
//   else the object is a string then split
  else if(typeof iterable == 'string') iterable = iterable.split('') 
//   create result arr variable and add first element of given string/arr
  let result = [iterable[0]]
//   iterate through the given string/arr
  iterable.forEach(el =>{
//   check if the element is same as the result's last element
    if(el != result[result.length-1]) result.push(el) 
  })

return result
}
// uniqueInOrder([1,2,2,3,3]) 

// uniqueInOrder('AAAABBBCCDAABBB') // ['A','B','C','D','A','B']
