// Time complexity -> O(nlogn)

const quick_sort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const left_array = [];
  const right_array = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left_array.push(arr[i]);
    } else {
      right_array.push(arr[i]);
    }
  }
  return [...quick_sort(left_array), pivot, ...quick_sort(right_array)];
};

console.log(quick_sort([9, -2, 3, 1]));
console.log(quick_sort([9, -2]));
console.log(quick_sort([9, -2, 3, 1, 16, 5, 4, 7]));
