'use strict';

// JavaScript is synchronous
// Execute the code block in order after hoisting
// hoisting: var, function declaration
console.log('1');
setTimeout(() => { console.log('2'); }, 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'david' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'david') {
        onSuccess({ name: 'david', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID');
const password = prompt('Enter your PASSWORD');

userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);