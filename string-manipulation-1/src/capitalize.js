/* exported capitalize */

// 1) Create storage for string output
// 2) Get first character of string input
//    2a) Convert first character to uppercase
//    2b) Assign converted first character to storage
// 3) Check remaining characters of string input
//    3a) Convert remaining characters to lowercase
//    3b) Concatenate converted remaining characters to storage
// 4) Output storage

function capitalize(word) {
  var capitalizedWord = word[0].toUpperCase();

  for (var i = 1; i < word.length; i++) {
    capitalizedWord += word[i].toLowerCase();
  }

  return capitalizedWord;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function capitalize(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }
