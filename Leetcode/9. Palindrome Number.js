/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
//     check the length if its even or then divide in middle point between make two array
    x = Array.from(String(x));
     let first
     let sec 
    if(x.length % 2 != 0){
         first = x.filter((el,i) => i <= Math.floor(x.length/2))
         sec = x.filter((el,i) => i >= Math.floor(x.length/2))
    }else{
         first = x.filter((el,i) => i < x.length/2)
         sec = x.filter((el,i) => i > x.length/2)
    }
        
//     then check both arrays are equal
    for(let i = 0; i < first.length; i++){
        if(first[i] == sec[(sec.length-1)-i]) return true
    }
};

isPalindrome(121)
