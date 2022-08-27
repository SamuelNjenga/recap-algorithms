const maxSum = (nums) => {
  let max = nums[0];
  let current_sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (current_sum < 0) {
      current_sum = 0;
    }
    current_sum += nums[i];
    max = Math.max(current_sum, max);
  }

  return max;
};
console.log(maxSum([-1, 3, 5, -2, 20]));
console.log(maxSum([-1, 3, 5, 20, -2]));
