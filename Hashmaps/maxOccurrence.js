
function findMaxOccurence(array) {
  const count = {};
  for (const num of array) {
    count[num] = (count[num] || 0) + 1;
   }
  
  let maxNum = null;
  let maxCount = 0;

   for(let num in count){
    if(count[num]> maxCount){
      maxCount = count[num]
      maxNum = num;
    }
   }
    return {number : maxNum,  Occurrence : maxCount}
}

let array = [1,23,3,4,5,6,5,5,5,5]
const result = findMaxOccurence(array);
console.log(result); 
