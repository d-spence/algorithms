const myMap = new Map();

myMap.set('dan', true);
myMap.set('john', false);
myMap.set('bob', true);

console.log(myMap.size); // 3
console.log(myMap.get('dan')); // true

myMap.forEach((val, key) => {
  console.log(`${key}: ${val}`);
});