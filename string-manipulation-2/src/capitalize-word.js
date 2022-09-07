/* exported capitalizeWord */

// 1) Create storage for string output
// 2) Check if string input is 'javascript'
//    2a) Create temporary storage for 'java'
//        2aa) Concatenate first character with remaining characters as lowercase
//    2b) Create temporary storage for 'script'
//        2ba) Concatenate first character as uppercase with remaining characters as lowercase
// 3) Get first character of string input
//    3a) Convert first character to uppercase
//    3b) Assign converted first character to storage
// 4) Check remaining characters of string input
//    4a) Convert remaining characters to lowercase
//    4b) Concatenate converted remaining characters to storage
// 5) Output storage

function capitalizeWord(word) {
  var newWord = word[0].toUpperCase();

  if (word.toLowerCase() === 'javascript') {
    var tempStringOne = newWord + word.toLowerCase().substring(1, 4);
    var tempStringTwo = word.charAt(4).toUpperCase() + word.toLowerCase().substring(5);

    return tempStringOne + tempStringTwo;
  }

  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }

  return newWord;
}
