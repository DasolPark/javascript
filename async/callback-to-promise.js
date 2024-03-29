// From hell to heaven
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'david' && password === 'park') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'david') {
          resolve({ name: 'david', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000)
    })
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID');
const password = prompt('Enter your PASSWORD');

userStorage
  .loginUser(id, password)
  .then(user => userStorage.getRoles(user))
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(error => console.log(error));

// Short coding
// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(error => console.log(error));

// Home work
// change promise of last userStorage instance to async/await

async function consoleUserRole(id, password) {
  const userId = await userStorage.loginUser(id, password);
  const userRole = await userStorage.getRoles(userId);

  return userRole;
}

consoleUserRole(id, password)
  .then(roleObj => console.log(roleObj))
  .catch(error => console.log(error));