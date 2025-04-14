/* isItArray */
/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/

const isItArray = (input) => {
 
  if( typeof input === "object"  && input.length >=1 ){
   
    console.log(true )

  }else{
    console.log(false)
  }
};
isItArray([1, 2, 4, 0]) // => true
 isItArray({name: "has"}) // => false

Examples:
isItArray("w3resource")// => false

isItArray(3)// => false
isItArray(false)// => false
isItArray([true, 3, "MerakiAcademy"]) //=> true

module.exports = { isItArray };
