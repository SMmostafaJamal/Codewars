/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/
function toCamelCase(str){
  str.includes('_') ? str = str.split('_') : str = str.split('-')
  
//   join first array and loop through the 'str' except first array uppercase first letter of el's
//   concat except first letter of the el's and join return
  return str[0] + str.splice(1).map(el => el[0].toUpperCase() + el.slice(1)).join('')
}

