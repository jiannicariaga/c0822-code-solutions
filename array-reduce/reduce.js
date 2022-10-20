function reduce(array, reducer, initialValue) {
  let result = initialValue;
  let i = 0;

  if (arguments.length < 3) {
    result = array[0];
    i = 1;
  }

  for (; i < array.length; i++) {
    result = reducer(result, array[i]);
  }

  return result;
}
