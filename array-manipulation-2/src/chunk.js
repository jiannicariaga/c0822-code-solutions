/* exported chunk */

// 1) Create storage for array output
// 2) Create temporary storage as an empty array
// 3) Create storage for a number as a counter starting at zero
// 4) Check if number input is larger than length of array input
//    4a) Output an empty array
// 5) Check each element in array input
//    5a) Check if counter matches size input
//        5ca) Append temporary storage to output storage
//        5cb) Clear temporary storage
//        5cc) Reset counter to zero
//    5b) Append current element to temporary storage
//    5c) Increment counter by one
// 6) Append temporary storage to output storage
// 7) Output storage

function chunk(array, size) {
  var newArray = [];
  var tempArray = [];
  var count = 0;

  if (size > array.length) {
    return [];
  }

  for (var i = 0; i < array.length; i++) {
    if (count === size) {
      newArray.push(tempArray);
      tempArray = [];
      count = 0;
    }

    tempArray.push(array[i]);
    count++;
  }

  newArray.push(tempArray);

  return newArray;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function chunk(array, size) {
//   var newArray = [];
//
//   if (size > array.length) {
//     return array;
//   }
//
//   for (var i = 0; i < array.length; i += size) {
//     newArray.push(array.slice(i, i + size));
//   }
//
//   return newArray;
// }
