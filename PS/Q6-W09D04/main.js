/* arrayCenter */

/*  
have an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

const arrayCenter = (arr) => {
 arr.forEach(element => {
  if(arr.length %2 === 0 ){
    let middle = arr[arr.length-1 %2]+ arr[(((arr.length -1)%2)+1)]
    console.log(middle)
  }else{
    let middle1 = arr[(arr.length-1)/2]
    console.log(middle1)
  }
  
 });  
};



arrayCenter([2, 3, 4, -6, 2]); // => 4


arrayCenter([2, 3, 2, 9, 2]); // => 2
arrayCenter([2, 5, 1]); // => 5
arrayCenter([2, 3]); // => 2.5
arrayCenter([]); // => "empty Array"
module.exports = { arrayCenter };
