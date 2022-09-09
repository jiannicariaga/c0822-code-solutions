/* exported omit */

// 1) Create storage for object output
// 2) For each element in array input, check each property in object input
//    2a) Check if current array element matches current object property and if current object property is not undefined
//    2b) Add key-value to storage
// 3) Output storage

function omit(source, keys) {
  var newObject = source;

  for (var i = 0; i < keys.length; i++) {
    for (var property in source) {
      if (keys[i] !== property || source[property] === undefined) {
        delete newObject.property;
      }
    }
  }

  return newObject;
}
