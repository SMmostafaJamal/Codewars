// Define a method/function that removes from a given array of integers all the values contained in a second array.
// Examples (input -> output):

// * [1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6 ,7 ,8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

Array.prototype.remove_ = function(integer_list, values_list){
    this.integer_list = integer_list
    this.values_list = values_list
    let store = []
    
    for(let i=0; i < this.values_list.length; i++){
      for(let j=0; j < this.integer_list.length; j++){
  //         console.log(this.integer_list[j], this.values_list[i])
        if(this.integer_list[j] !== this.values_list[i]){
              store.push(this.integer_list[j])
        }
      }
      this.integer_list.splice(0, this.integer_list.length, ...store)
      store.length=0
      
      
     
    }
      return this.integer_list
    
  }