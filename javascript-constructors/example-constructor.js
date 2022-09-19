function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor);

var construct = new ExampleConstructor();
console.log('value of construct:', construct);

var isInstance = construct instanceof ExampleConstructor;
console.log('value of isInstance:', isInstance);
