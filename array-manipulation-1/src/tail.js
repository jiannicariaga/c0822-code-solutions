/* exported tail */

// 1) Create storage for array output
// 2) Check each element of input array exclusing the first element
//    2a) Append each element to storage
// 3) Output storage

function tail(array) {
  var newArray = [];

  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function tail(array) {
//   return array.splice(1);
// }
