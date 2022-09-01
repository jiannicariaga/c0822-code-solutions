/* exported getStudentNames */

// 1) Create storage for the (array) output
// 2) Check each key in the (array) input
//    2a) Append the current key's value to storage
// 3) Output storage

function getStudentNames(students) {
  var names = [];

  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }

  return names;
}
