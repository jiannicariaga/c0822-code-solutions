/* exported flatten */

// 1) Create storage for array output
// 2) Check each element in array input
//    2a) If the current element is not an array,
//        then append current element to storage
//    2b) If the current element is an array,
//        then check each element in that array
//        2ba) Append current element to storage
// 3) Output storage

function flatten(array) {
  var flatArray = [];

  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flatArray.push(array[i]);
    } else {
      for (var j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    }
  }

  return flatArray;
}
