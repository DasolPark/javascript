// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const david = { name: 'david', age: 20 };
print(david);

// with JavaScript magic (dynamically typed language)
david.hasJob = true;
console.log(david.hasJob);

// can delete property later
delete david.hasJob;
console.log(david.hasJob);

// 2. Computed properties
// key must be string
console.log(david.name);
console.log(david['name']);
david['hasJob'] = true;
console.log(david.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(david, 'name');
printValue(david, 'age');

// 3. Property value shorthand
const person1 = { name: 'juice', age: 40 };
const person2 = { name: 'dave', age: 30 };
const person3 = { name: 'kate', age: 20 };
const person4 = new Person('david', 25);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in david);
console.log('age' in david);
console.log('random' in david);
console.log(david.random);

// 6. for..in VS for..of
// for (key in obj)
console.clear();
for (key in david) {
  console.log(key);
  console.log(david[key]);
}

// for (value of iterable)
const arr = [2, 3, 5, 8];
for (value of arr) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'david', age: 20 };
const user2 = user;
user2.name = 'dave';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);