const newOject = {
  foo: 'helllo',
  bar: 'world'
};

const mixinObject = Object.assign({
  baz: 'qux',
}, newOject);

console.log(mixingObject.hasOwnProperty('foo'));

//true
