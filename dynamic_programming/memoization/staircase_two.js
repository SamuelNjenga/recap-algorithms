// m is the most stairs one is allowed to climb at one time.
const staircase_problem = (n) => {
  let m = 3;
  let stair_array = [];
  stair_array[0] = 1;
  stair_array[1] = 1;
  stair_array[2] = 2;
  for (let i = 3; i <= n; i++) {
    stair_array[i] =
      stair_array[i - 1] + stair_array[i - 2] + stair_array[i - 3];
  }
  return stair_array[n];
};

console.log(staircase_problem(4));
console.log(staircase_problem(3));
