// Space complexity -> O(n) and Time complexity -> O(n)
const optimizedFibonacci = (n) => {
  let first_variable = 0;
  let second_variable = 1;
  if (n === 0) {
    return first_variable;
  } else if (n === 1) {
    return second_variable;
  } else {
    let third_variable;
    for (let i = 2; i <= n; i++) {
      third_variable = first_variable + second_variable;
      first_variable = second_variable;
      second_variable = third_variable;
    }
    return third_variable;
  }
};

console.log(optimizedFibonacci(9));
console.log(optimizedFibonacci(0));
console.log(optimizedFibonacci(8));
console.log(optimizedFibonacci(2));
console.log(optimizedFibonacci(1));
