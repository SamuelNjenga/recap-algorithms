// Time complexity -> O(n*n)

const selection_sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = tmp;
  }
  return arr;
};

console.log(selection_sort([9, 2, 4, -1, 1]));
