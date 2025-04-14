/* array_Copy */

/*  
Write a JavaScript function to copy an array.
*/

const array_Copy = (arr) => {
const newArr= arr.splice(0,arr.length)
console.log(newArr)
};
array_Copy(["string", true, 3]); // => ["string", true, 3]



array_Copy([1, 2, 3]); // => [1, 2, 3]
array_Copy([1, 9, 8]); // => [1, 9, 8]
array_Copy([]); // => []
module.exports = { array_Copy };
