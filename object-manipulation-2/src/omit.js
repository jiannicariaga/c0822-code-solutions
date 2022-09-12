/* exported omit */

// 1) Create storage for object output
// 2) For each property in object input, check each element in array input
//    2a) Check if current array element matches current object property
//        2aa) Delete current storage property
//        2ab) Start next check
// 3) Assign current value of object input to current property of storage
// 4) Output storage

function omit(source, keys) {
  var newObject = {};

  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === property) {
        delete newObject[property];
        break;
      }

      newObject[property] = source[property];
    }
  }

  return newObject;
}
