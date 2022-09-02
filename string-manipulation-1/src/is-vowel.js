/* exported isVowel */

// 1) Create storage for char (string) input
//    1a) Convert char to lowercase and assign to storage
// 2) Check if storage is a vowel
// 3) Output (boolean) result

function isVowel(char) {
  var lcc = char.toLowerCase();

  return lcc === 'a' || lcc === 'e' || lcc === 'i' || lcc === 'o' || lcc === 'u';
}
