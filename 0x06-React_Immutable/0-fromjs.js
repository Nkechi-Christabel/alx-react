const { fromJS } = require('immutable');

function getImmutableObject(object) {
  return fromJS(object);
}

// Export the function so it can be used in other files
module.exports = getImmutableObject;
