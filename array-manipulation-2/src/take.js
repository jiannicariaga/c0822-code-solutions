/* exported take */

// 1) Create storage for array output
// 2) Check if array input is empty
//    2a) Output array input
// 3) Check each element in array input up to number input
//    3a) Append current element to storage
// 4) Output storage

function take(array, count) {
  var newArray = [];

  if (array.length === 0) {
    return array;
  }

  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function take(array, count) {
//   return array.slice(0, count);
// }
