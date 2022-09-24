/* exported zip */

// 1) Create storage for array output
// 2) Create temporary storage for array length
// 3) Compare lenghts of both array inputs
//    4a) Assign the shorter length to temporary storage
// 5) Check each element in both arrays up to value of temporary storage
// 6) Append current element of second array input to element of first array input
//    6a) Append new array to storage
// 7a) Output storage

function zip(first, second) {
  var zippedArray = [];
  var tempArray = [];
  var length = null;

  if (first.length === second.lenght || first.length < second.length) {
    length = first.length;
  } else {
    length = second.length;
  }

  for (var i = 0; i < length; i++) {
    tempArray.push(first[i], second[i]);
    zippedArray.push(tempArray);
    tempArray = [];
  }

  return zippedArray;
}
