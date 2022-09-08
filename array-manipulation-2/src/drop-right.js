/* exported dropRight */

// 1) Create storage for output array
// 2) Check if number input is larger than length of array input
//    2a) Output an empty array
// 3) Check each element in array up to length of array input minus number input
//    3a) Append current element to storage
// 4) Output storage

function dropRight(array, count) {
  var newArray = [];

  if (count > array.length) {
    return array;
  }

  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function dropRight(array, count) {
//   if (count > array.length) {
//     return array;
//   } else {
//     return array.slice(0, array.length - count);
//   }
// }
