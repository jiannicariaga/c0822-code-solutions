/* exported getValues */

// 1) Create storage for array output
// 2) Check each key in object input
//    2a) Append current value to storage
// 3) Output storage

function getValues(object) {
  var values = [];

  for (var key in object) {
    values.push(object[key]);
  }

  return values;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function getValues(object) {
//   return Object.values(object);
// }
