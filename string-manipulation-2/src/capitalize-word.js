/* exported capitalizeWord */

// 1) Create storage for string output
// 2) Get first character of string input
//    2a) Convert first character to uppercase
//    2b) Assign converted first character to storage
// 3) Check remaining characters of string input
//    3a) Convert remaining characters to lowercase
//        3aa) Convert 's' to uppercase if string input is 'javascript'
//    3b) Concatenate converted remaining characters to storage
// 4) Output storage

function capitalizeWord(word) {
  var newWord = word[0].toUpperCase();

  for (var i = 1; i < word.length; i++) {
    if (i === 4 && word.toLowerCase() === 'javascript') {
      newWord += word[i].toUpperCase();
    } else {
      newWord += word[i].toLowerCase();
    }
  }

  return newWord;
}
