function double(number) {
  return number * 2;
}

function map(array, transform) {
  var newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(transform(array[i]));
  }

  return newArr;
}
