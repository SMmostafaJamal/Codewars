// P: Make a program that filters a list of strings and returns a list with only your friends name in it.

//   If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// R: will it ever returns integer, will it only returns the arrays of strings with length 4,
 
// E:  Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// P:
function friend(friends){
//   loop through the given array and filter out which is exactly four letters
  return friends.filter(el => el.length == 4)
}

friend(["Ryan", "Kieran", "Mark"])
