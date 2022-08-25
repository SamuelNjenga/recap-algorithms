// Brute Force Solution for powering a number. Time complexity -> O(n)
const pow = (a, b) => {
  let power = a;
  for (let i = 2; i <= b; i++) {
    power = power * a;
  }
  return power;
};
console.log(pow(5, 4));

// Divide and Conquer -> Time complexity -> O(n)
const power_one = (a, b) => {
  if (b === 0) return 1;
  if (b === 1) return a;
  if (b % 2 === 0) {
    return power_one(a, b / 2) * power_one(a, b / 2);
  } else {
    return power_one(a, (b - 1) / 2) * power_one(a, (b - 1) / 2) * a;
  }
};
console.log(power_one(5, 4));

// Dynamic Programming -> Time complexity -> O(logn)
const power_two = (a, b) => {
  if (b === 0) return 1;
  if (b === 1) return a;
  if (b % 2 === 0) {
    let x = power_two(a, b / 2);
    return x * x;
  } else {
    let x = power_two(a, (b - 1) / 2);
    return x * x * a;
  }
};
console.log(power_two(5, 5));
