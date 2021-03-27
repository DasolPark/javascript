'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const foods = ['🍕', '🍔'];
console.log(foods);
console.log(foods.length);
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
console.log(foods[foods.length - 1]);
console.clear();

// 3. Looping over an array
// print all foods
// a. for
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// b. for of
for (const value of foods) {
  console.log(value);
}

// c. forEach
foods.forEach((fruit, index, array) => console.log(fruit, index, array));

// 4. addtion, deletion, copy
// push: add an item to the end
foods.push('🍟', '🌭');
console.log(foods);

// pop: remove an item from the end
const poped = foods.pop();
foods.pop();
console.log(foods);

// unshift: add an item to the benigging
foods.unshift('🍟', '🌭');
console.log(foods);

// shift: remove an item to the beniggin
foods.shift();
foods.shift();
console.log(foods);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
foods.push('🍿', '🥐', '🥨');
console.log(foods);
foods.splice(1, 1);
console.log(foods);
foods.splice(1, 0, '🥖', '🧀');
console.log(foods);

// combine two arrays
const foods2 = ['🍖', '🥩'];
const newfoods = foods.concat(foods2);
console.log(newfoods);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(foods);
console.log(foods.indexOf('🍕'));
console.log(foods.indexOf('🥖'));
console.log(foods.indexOf('🍳'));

// includes
console.log(foods.includes('🍕'));
console.log(foods.includes('🍳'));

// lastIndexOf
console.clear();
foods.push('🍕');
console.log(foods);
console.log(foods.indexOf('🍕'));
console.log(foods.lastIndexOf('🍕'));

// Assignment: Read array document