/* exported capitalizeWord */

// 1) Create storage for string output
// 2) Check if string input in lowercase is 'javascript'
//    2a) Output 'JavaScript'
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
    return 'JavaScript';
  }

  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }

  return newWord;
}
