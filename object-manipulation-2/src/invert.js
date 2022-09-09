/* exported invert */

// 1) Create storage for object output
// 2) Create temporary storage for object input
// 3) Check each property in object input
//    3a) Store current property in temporary storage
//    3b) Set property to current value
//    3c) Set value to temporary storage
// 4) Output storage

function invert(source) {
  var tempObject = {};

  for (var properties in source) {
    tempObject = properties;
    properties = source[properties];
    source[properties] = tempObject;
  }

  return tempObject;
}
