/* exported pick */

// 1) Create storage for object output
// 2) For each property in object input, check each element in array input
//    2a) Check if current array element matches current object property and if current object property is not undefined
//        2aa) Assign current value of object input to current property of storage
// 3) Output storage

function pick(source, keys) {
  var newObject = {};

  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === property && source[property] !== undefined) {
        newObject[property] = source[property];
      }
    }
  }

  return newObject;
}
