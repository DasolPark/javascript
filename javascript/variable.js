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

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function (변수에도 담을 수 있고, 파라미터에 넣을 수도 있고, return도 가능하다는 뜻)

const count = 17; // integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`vlaue: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const notANumber = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(notANumber);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const david = 'david';
const greeting = 'hello ' + david;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloDear = `Hi ${david}`; // template literals (string)
console.log(`value: ${helloDear}, type: ${typeof helloDear}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null (empty value 를 지정한 것)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined (value가 정해지지 않는 것)
let x = undefined; // or let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const blue = { name: 'david', age: 28 }; // blue = {} impossible
david.age = 29; // possible

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // Error (runtime에서 type이 정해짐)

