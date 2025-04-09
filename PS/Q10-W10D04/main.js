/* Is Part Of */

/*  
Make an array method that can return whether or not a context array is a part of an input array.
To simplify the problem, you can assume that both arrays will contain only strings
Hint : her resource for Prototype you can check it and read more (https://www.w3schools.com/js/js_object_prototypes.asp)
*/

const includes = (array,arr2)=>{
  console.log(array,arr2)
  if(array.some(item => arr2.includes(item))){
    console.log(true)
  }else{
    console.log(false)
  };
}
includes(['car', 'dog', 'cow'],['dog', 'cow', 'fox'])


// .isPartOf() // => true
/*
Examples:
[].isPartOf([1, 5, 2]) // => true
['car', 'dog', 'cow'].isPartOf(['dog', 'cow', 'fox', 'car']) // => true
['car', 'dog', 'cow'].isPartOf(['dog', 'cow', 'fox']) // => false
*/
module.exports = Array.prototype.isPartOf;
