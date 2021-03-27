'use strict';

// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network request in 10 secs....
  return 'david';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  // throw 'error';
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  // callback hell!
  // return getApple().then(apple => {
  //   return getBanana().then(banana => `${apple} + ${banana}`);
  // })

  // to heaven but wait each await line such as synchronous
  // const apple = await getApple();
  // const banana = await getBanana();

  // let's make asynchronous, each line separately excutes(but not recommended)
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);