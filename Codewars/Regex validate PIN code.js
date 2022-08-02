// pin code with 4 or 6 digits for ATM machine check if its valid or not

// P: strings? numbers? negative numbers or any character? decimal values? 4 or 6 numbers?

// R: do i've to return as strings or arrays or numbers? true or false? will i console log or just return? 

// E: '1111' or '111111' => true, '1a11' or '-12345' or 'asdf/$' => false

// P:
function validatePIN (pin) {
  //   check the input's length to 4  or 6 and it is integers
   return (pin.length === 4 || pin.length === 6) && 
     ((pin.indexOf('.') == -1) && pin.indexOf('\n') == -1) &&
     (Number(pin) >= 0 && pin.indexOf('+') == -1) && !isNaN(Number(pin)) 
     ?  true :  false  

}

validatePIN("100\n") // true
validatePIN("123456") //true
validatePIN("437.") //false
