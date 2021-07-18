const arrayLength = 100;
const numsArray = Array.from(Array(arrayLength), (n, i) => i + 1); // [1, 2, ..., 99, 100]

const binarySearch = (arr, num) => {
  // Use binary search method to find num within arr; returns index of matching item
  let steps = 1;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];

    if (guess === num) {
      console.log(`${num} found at index ${mid} in ${steps} step(s)`);
      return mid;
    } else if (guess > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    steps++;
  }
  console.log(`${num} was not found`);
  return null;
}

// binarySearch(numsArray, -1);

module.exports = binarySearch;