/* exported ransomCase */

// 1) Create storage for string output
// 2) Check each character in string input
//    2a) Convert odd characters to lowercase
//    2b) Convert even characters to uppercase
//    2c) Concatenate converted characters to storage
// 3) Output storage

function ransomCase(string) {
  var newWord = '';

  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newWord += string[i].toLowerCase();
    } else {
      newWord += string[i].toUpperCase();
    }
  }

  return newWord;
}
