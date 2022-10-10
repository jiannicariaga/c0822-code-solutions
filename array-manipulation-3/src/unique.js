/* exported unique */

// 1) Create storage for output array
// 2) Check each element in array input
//    2a) If current element is not already in storage,
//        then append current element to storage
// 3) Output storage

function unique(array) {
  var uniqueArray = [];

  for (var i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}
