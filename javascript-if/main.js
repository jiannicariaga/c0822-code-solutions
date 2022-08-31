/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  }

  return false;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }

  return false;
}

function startsWithJ(string) {
  if (string[0].toLowerCase() === 'j') {
    return true;
  }

  return false;
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }

  return false;
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }

  return false;
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16 && person.age > 21) {
    return true;
  }

  return false;
}

function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'Acidic pH level.';
  } else if (pH === 7) {
    return 'Neutral pH level.';
  } else if (pH > 7 && pH <= 14) {
    return 'Basic pH level.';
  } else {
    return 'Invalid pH level.';
  }
}

function introduceWarnerBro(name) {
  if (name.toLowerCase() === 'yakko' || name.toLowerCase() === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name.toLowerCase() === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}
