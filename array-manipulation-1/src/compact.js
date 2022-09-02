/* exported compact */

// 1) Create storage for array output
// 2) Check each element in array input for truthiness
//    2a) Append current element to storage if truthy
// 3) Output storage

function compact(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function compact(array) {
//   return array.filter(Boolean);
// }
