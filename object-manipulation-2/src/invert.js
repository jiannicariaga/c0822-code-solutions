/* exported invert */

// 1) Create storage for object output
// 2) Check each property in object input
//    2a) Assign the current property to the value of the current property in storage
// 4) Output storage

function invert(source) {
  var newObject = {};

  for (var property in source) {
    newObject[source[property]] = property;
  }

  return newObject;
}
