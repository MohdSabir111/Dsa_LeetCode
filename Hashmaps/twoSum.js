function twoSum(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

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
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);

console.log(result);
