// taking non negative integer as an argument and returning the digits decending order
// P: integer, non floating number, positive number
// R: integer with decending order
// E: Input: 42145 Output: 54421

// P: 
// Will return a function
function descendingOrder(n){
  n = Array.from(n.toString(), Number)
    for (var i = 1; i < n.length; i++) {
        var tmp = n[i];
        for (var j = i - 1; j >= 0 && (n[j] < tmp); j--) {
            n[j + 1] = n[j];
        }
        n[j + 1] = tmp;
    }
    return Number(n.join(''));
}

descendingOrder(1021) // 2110
