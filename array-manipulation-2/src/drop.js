/* exported drop */

// 1) Create storage for array output
// 2) Check if array input is empty
//    2a) Output array input
// 3) Check each element in array starting at number input
//    3a) Append current element to storage
// 4) Output storage

function drop(array, count) {
  var newArray = [];

  if (array.length === 0) {
    return array;
  }

  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function drop(array, count) {
//   return array.slice(count);
// }
