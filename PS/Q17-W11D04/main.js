/* removeNotUnique */

/*  
have a string, delete any characters that are not unique from the string.
Ignore any space character
*/

const removeNotUnique = (str) => {
  let arrStr= str.split("")

  arrStr.forEach(e => {
   if(arrStr.indexOf(e)){
    console.log(arrStr)
   }else{
    console.log("no")
   }
   
  
  })
   


  
};
removeNotUnique("memory") // => "eory"
/* 
Examples:
removeNotUnique("memory") // => "eory"
removeNotUnique("hello lol") // => "he"
removeNotUnique("xyzj") // => "xyzj"
removeNotUnique("iiii") // => ""
removeNotUnique("") // => "it's empty"
removeNotUnique("       ") // => "it's empty"

*/
module.exports = { removeNotUnique };
