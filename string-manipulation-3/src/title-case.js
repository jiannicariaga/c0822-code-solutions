/* exported titleCase */

function titleCase(title) {
  var newTitle = title.toLowerCase().split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  if (newTitle[0].toLowerCase() === 'javascript:') {
    newTitle[0] = 'JavaScript:';
  } else {
    newTitle[0] = newTitle[0].charAt(0).toUpperCase() + newTitle[0].slice(1).toLowerCase();
  }

  for (var i = 1; i < newTitle.length; i++) {
    if (newTitle[i].length >= 4) {
      newTitle[i] = newTitle[i].charAt(0).toUpperCase() + newTitle[i].slice(1).toLowerCase();
    } else {
      if (minorWords.includes(newTitle[i])) {
        newTitle[i] = newTitle[i].toLowerCase();
      } else {
        newTitle[i] = newTitle[i].charAt(0).toUpperCase() + newTitle[i].slice(1).toLowerCase();
      }
    }

    if (newTitle[i - 1].includes(':')) {
      newTitle[i] = newTitle[i].charAt(0).toUpperCase() + newTitle[i].slice(1).toLowerCase();
    }

    if (newTitle[i].includes('-')) {
      var hyphen = newTitle[i].indexOf('-') + 1;
      var firstWord = newTitle[i].charAt(0).toUpperCase() + newTitle[i].slice(1, hyphen);
      var secondWord = newTitle[i].charAt(hyphen).toUpperCase() + newTitle[i].slice(hyphen + 1);

      newTitle[i] = firstWord + secondWord;
    }

    if (newTitle[i].toLowerCase() === 'javascript') {
      newTitle[i] = 'JavaScript';
    } else if (newTitle[i].toLowerCase() === 'javascript:') {
      newTitle[i] = 'JavaScript:';
    }

    if (newTitle[i].toLowerCase() === 'api') {
      newTitle[i] = 'API';
    }
  }

  newTitle = newTitle.join(' ');

  return newTitle;
}
