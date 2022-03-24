// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let total = 0;
  arrayOfSheep.map(x => x === true? total += 1 : total += 0 )
  return total;
}
countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true])
