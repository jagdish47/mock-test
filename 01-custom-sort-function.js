// 1. Create a custom sorting function which sorts an array of numbers in ascending order.

function customSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let arr = [34, 543, 534, 543, 5, 43, 0];
let ans = customSort(arr);

console.log(ans);
