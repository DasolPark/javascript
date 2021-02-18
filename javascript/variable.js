// 1. Use strict
// added in ES5
// use this for Vanilla JavaScript
'use strict';

// 2. Variable
// let (added in ES6)
// mutable
let globalName = 'global name';
{
  let name = 'david';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
console.log(age);
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const DAYS_IN_WEEK = 7;
const MAX_NUMBER = 5;