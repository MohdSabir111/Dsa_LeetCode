// Explanation--  complement = 9-2 =7 , hasOwnProperty -its false so   { '2' : 0 }
  // comlement = 9-11 = -2 ,  hasOwnProperty -its false  so  { '2' : 0,  '11' : 1 }
//  comlement = 9-7= 2  ,  hasOwnProperty -its true so [0,2] answer
function twoSum(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
     // hasOwnProperty- check if there a "value" to this corresponding "key"   
    // Check if the complement exists in the numIndices object
    
    if (numIndices.hasOwnProperty(complement)) {
      
      // If yes, return the indices of the two numbers
      return [numIndices[complement], i];
    }

    // If not, store the current number and its index in the numIndices object
    numIndices[nums[i]] = i;
  
  }

  // If no solution is found
  return null;
}

// Example usage:
const nums = [2, 11, 7, 15];
const target = 9;
const result = twoSum(nums, target);

console.log(result);
