/* exported getKeys */

// 1) Create storage for array output
// 2) Check each key in object input
//    2a) Append current key to storage
// 3) Output storage

function getKeys(object) {
  var keys = [];

  for (var key in object) {
    keys.push(key);
  }

  return keys;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function getKeys(object) {
//   return Object.keys(object);
// }
