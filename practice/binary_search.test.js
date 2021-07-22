const binarySearch = require('./binary_search');

const numsArray1 = Array.from(Array(100), (n, i) => i + 1); // [1, 2, ..., 100]
const numsArray2 = Array.from(Array(4000000), (n, i) => i + 1);

// Test binarySearch ===========================================================
describe('binarySearch', () => {
  describe('index of a number in an array of numbers from 1 to 100', () => {
    test('should be 37 when number is 38', () => {
      expect(binarySearch(numsArray1, 38)).toBe(37);
    });
    
    test('should be 99 when number is 100', () => {
      expect(binarySearch(numsArray1, 100)).toBe(99);
    });
  
    test('should be null when number is -1', () => {
      expect(binarySearch(numsArray1, -1)).toBeNull();
    });

    test('should be null when number is 150', () => {
      expect(binarySearch(numsArray1, 150)).toBeNull();
    });
  });

  describe('index of a number in an array of numbers from 1 to 4 million', () => {
    test('should be 3740079 when number is 3740080', () => {
      expect(binarySearch(numsArray2, 3740080)).toBe(3740079);
    });
  
    test('should be null when number is -1', () => {
      expect(binarySearch(numsArray2, -1)).toBeNull();
    });

    test('should be null when number is 4000001', () => {
      expect(binarySearch(numsArray2, 4000001)).toBeNull();
    });
  });
});
