/* exported reverse */

// 1) Create storage for array output
// 2) Check each element in array input starting from end
//    2a) Append current element to storage
// 3) Output storage

function reverse(array) {
  var yarra = [];

  for (var i = array.length - 1; i >= 0; i--) {
    yarra.push(array[i]);
  }

  return yarra;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function reverse(array) {
//   return array.reverse();
// }
