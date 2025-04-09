/* evenAppearance */

/*  
Find the first item which appear an even number of times in an array.
*/

const evenAppearance = (array) => {
  count = 0
  array.forEach(e=> {
if(e%2 === 0){
  count+=1
  if(count ===2)
  console.log(e)

}   
  });
};
evenAppearance([1, 1, 2, 6, 6]) // => 1

Examples:

 evenAppearance([1, 2, 2, 9, 8, 8, 6, 6]) // => 2
evenAppearance([1, 9, 7, 3, 6, 6, 8, 9, 9]) // => 6
evenAppearance([1, 9, 7, 3, 6, 6, 8, 9]) // => 9
module.exports = { evenAppearance };
