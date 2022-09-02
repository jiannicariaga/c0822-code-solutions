/* exported toObject */

// 1) Create storage for object output
// 2) Assign value element of array input to storage object at key element of array input
// 3) Output storage

function toObject(keyValuePair) {
  var newObject = {};

  newObject[keyValuePair[0]] = keyValuePair[1];

  return newObject;
}
