const { findSmallest, selectionSort } = require('./selection_sort');

describe('findSmallest', () => {
  test('return index of smallest value', () => {
    let testArr1 = [5, 3, 6, 2, 10];
    let testArr2 = [42, 7, 98, 10, 15, 100, 74, 11, 142, 6];

    expect(findSmallest(testArr1)).toBe(3);
    expect(findSmallest(testArr2)).toBe(9);
  });
});

describe('selectionSort', () => {
  test('sort list from lowest to highest', () => {
    let testArr1 = [5, 3, 6, 2, 10];
    let testArr2 = [6, 15, 2, -2, 19, 33, 0];

    expect(selectionSort(testArr1)).toEqual([2, 3, 5, 6, 10]);
    expect(selectionSort(testArr2)).toEqual([-2, 0, 2, 6, 15, 19, 33]);
  });
});
