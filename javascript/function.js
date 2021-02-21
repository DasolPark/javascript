// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or caculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hi all!');

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const david = { name: 'david' };
changeName(david);
console.log(david);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach(arg => console.log(arg));
}
printAll('david', 'june', 'may');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello'; // local variable
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); // error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  // return undefined
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`result of sum is ${result}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it
const print = function () {
  // anonymous function
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(5, 10));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function() {
  console.log('Yes!');
}
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('No!');
}

randomQuiz('love you', printYes, printNo);
randomQuiz('wrong answer', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log('simple print!');
}

const arrowSimplePrint = () => console.log('simple simple');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})()

// Fun quiz time
// function calculate(command, a, b)
// commad: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch(command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      break;
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('divide', 8, 2)); // 4
console.log(calculate('multiply', 2, 5)); // 10
console.log(calculate('remainder', 5, 2)); // 1