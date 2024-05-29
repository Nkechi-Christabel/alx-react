// example.js

const getImmutableObject = require('./0-fromjs.js');

const plainObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const immutableObject = getImmutableObject(plainObject);

console.log(immutableObject);
