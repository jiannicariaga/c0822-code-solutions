/* exported numVowels */

// 1) Create storage for number output
// 2) Create temportary storage for string input
//    2a) Conver temportary storage to lowercase
// 3) Check each character in string input
//    3a) Increment number output by one if the current character is a vowel
// 4) Output storage

function numVowels(string) {
  var vowels = 0;
  var tempString = string.toLowerCase();

  for (var i = 0; i < tempString.length; i++) {
    if (tempString[i] === 'a' || tempString[i] === 'e' || tempString[i] === 'i' || tempString[i] === 'o' || tempString[i] === 'u') {
      vowels++;
    }
  }

  return vowels;
}
