/* characterRecurrence */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by recurrence and then by 
 ascending order by character.
*/

const characterRecurrence = (str) => {
let arr = str.split("")
 let itemsarr=  arr.reduce((acc,item) => {
    if(acc[item]){
      ++acc[item]
    }else{
      acc[item]=1
    }
   return acc
    },[]);
  

console.log(itemsarr)

};
characterRecurrence("mississippi")
characterRecurrence("mississippi") // =>  [ ["i", 4],["s", 4],  ["p", 2],  ["m", 1]  ]
characterRecurrence("miaaiaaippi") // =>  [ ["a", 4],  ["i", 4],  ["p", 2],  ["m", 1] ]
characterRecurrence("miaaiaiaippi") // =>  [ ["i", 5],  ["a", 4],  ["p", 2],  ["m", 1] ]
characterRecurrence("miaaiamaippi") // =>  [ ["a", 4],  ["i", 4],  ["m", 2],  ["p", 2] ]
module.exports = { characterRecurrence };
