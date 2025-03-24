/* Sum Odd Number */

/*  
Write a function that returns the sum of odd numbers in an array.
1- i will write function 
2- i will write a counter 
3- i will iterate over array 
4- i will check if value of each index of array is odd number
5- i will make the sum for slected number 
6- i will return the result 
*/

const sumOddNumber = (arr) => {

  let counter = 0
  arr.forEach((ele) => {
   
    if(ele % 2){
      counter = counter + ele


  
    }
    
  });
  return counter
};
// sumOddNumber([1, 2, 3, 4, 5]) // => 9
sumOddNumber([1, 5, 3, 4, 5]) // => 14
sumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
sumOddNumber([2, 4, 6,0 ]) // => 0
sumOddNumber([1, 5, 3, 4, 5]) // => 14
sumOddNumber([-2, 0, 4, -3, 5]) // => 2
sumOddNumber([]) // => 0
/*
Examples:


*/
module.exports = { sumOddNumber };
