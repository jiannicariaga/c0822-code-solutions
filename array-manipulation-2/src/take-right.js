/* exported takeRight */

// 1) Create storage for output array
// 2) Check if number input is larger than length of array input
//    2a) Output an empty array
// 3) Check each element in array input starting from the end down to number input
//    3a) Append current element to storage
// 4) Output storage

function takeRight(array, count) {
  var newArray = [];

  if (count > array.length) {
    return array;
  }

  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function takeRight(array, count) {
//   if (count > array.length) {
//     return array;
//   } else {
//     return array.slice(array.length - count);
//   }
// }
