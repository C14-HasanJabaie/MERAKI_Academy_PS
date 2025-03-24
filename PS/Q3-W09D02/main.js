/* Reverse Each Word */

/*  
Write a function reverses the characters of every word of a sentence. sentences contain only English letter and space characters.
1-i will change the string to array 
2- i will jion array index
3- i will change array to stirng 
*/

const reverseEachWord = (str) => {
  let arr= str.split("")

  if(arr.length > 1){
  
let arr1 =arr.slice(0,5).reverse()
let arr2 = arr.slice(6).reverse()
let arr3 = arr1.concat(arr2)
return arr3.toString(" ")
    
  }else{
    return "Wrong!! it's empty string"
  }

  

};
// reverseEachWord("Hello world") // => "olleH dlrow"
// reverseEachWord("Hello guys") // => "olleH syug"
// reverseEachWord("It’s about what you can figure out") // => "s’tI tuoba tahw uoy nac erugif tuo"
// reverseEachWord("      ") // => "Wrong!! it's empty string"
/* 
Examples:




*/
module.exports = { reverseEachWord };
