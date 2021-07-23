// 4.1 Write out the code for the earlier sum function.
// See divide_and_conquer.js for sum and recursiveSum functions

// 4.2 Write a recursive function to count the number of items in a list.
const countListItems = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  arr.pop();
  return 1 + countListItems(arr);
}

const testArr1 = [2, 4, 5, 7, 9, 11, 14];
console.log(countListItems(testArr1)); // 7

// 4.3 Find the maximum number in a list.
const maxNumber = (arr) => {
  if (arr.length === 2) {
    return (arr[0] > arr[1]) ? arr[0] : arr[1];
  }

  const left = arr.shift();
  const right = maxNumber(arr);
  return (left > right) ? left : right;
}

const testArr2 = [4, 9, 14, 3, 1, 16, 8, 0];
console.log(maxNumber(testArr2)); // 16

// 4.4 Can you come up with the base case and recursive case for binary search?
// Base case: an array with one item; if it doesn't match, it isn't in the array.
// Recursive case: split array in half, throw one half away and call binary search on other half
