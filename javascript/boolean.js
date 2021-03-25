// false: 0, -0, '', null, undefined, NaN, false

const obj = {
  name: 'daivd',
};

if (obj) {
  console.log(obj.name);
}

obj && console.log(obj.name);