/* exported initial */

// 1) Create storage for array output
// 2) Check each element of input array exclusding the last element
//    2a) Append each element to storage
// 3) Output storage

function initial(array) {
  var newArray = [];

  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function initial(array) {
//   return array.splice(0, array.length - 1);
// }
