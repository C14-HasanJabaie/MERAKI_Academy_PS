/* isPrime*/
/* 
  A prime number is a positive integer that is only divisible by 1 and itself.
  For example, 2, 3, 5, 7, 11 are the first few prime numbers.*/

const isPrime = (num) => {
  if(num/num === 1 && num %2 === 0){
    console.log(num)
   
  }else{
    console.log("not A prime ")
    
  }
};
isPrime(4)
module.exports = { isPrime };
