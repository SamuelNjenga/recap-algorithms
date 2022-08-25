const maxSubArray = (nums) => {
  let maxSub = nums[0];
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += nums[i];
    maxSub = Math.max(maxSub, currentSum);
  }
  return maxSub;
};

console.log(maxSubArray([1, 2]));
console.log(maxSubArray([1, 2, 45, -7, 80]));
console.log(maxSubArray([1, 2]));
console.log(maxSubArray([-11, -2]));
