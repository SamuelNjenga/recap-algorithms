// Time Complexity -> O(logn)
const binary_search = (numbers, target) => {
  let left_index = 0;
  let right_index = numbers.length - 1;

  while (left_index <= right_index) {
    let middle_index = Math.floor((left_index + right_index) / 2);
    if (target === numbers[middle_index]) {
      return middle_index;
    }
    if (target < numbers[middle_index]) {
      right_index = middle_index - 1;
    } else {
      left_index = middle_index + 1;
    }
  }
  return -1;
};

console.log(binary_search([-2, 1, 4, 7, 8, 9], -2));
// console.log(binary_search([-2, 1, 4, 7, 8, 9], 8));
console.log(binary_search([-2, 1, 4, 7, 8, 9], 20));
console.log(binary_search([-2, 1, 4, 7, 8, 9], 1));
console.log(binary_search([-2, 1, 4, 7, 8, 9], 7));
