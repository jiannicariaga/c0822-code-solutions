var student = {
  firstName: 'Jianni',
  lastName: 'Cariaga',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Technical Account Manager';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic Coupe',
  year: 2009
};

vehicle['color'] = 'Silver';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible', vehicle['isConvertible']);

var pet = {
  name: 'Odin',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of vehicle:', vehicle);
console.log('value of pet:', pet);
