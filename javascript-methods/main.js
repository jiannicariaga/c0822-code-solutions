var num1 = 4;
var num2 = 2;
var num3 = 0;
var maximumValue = Math.max(num1, num2, num3);
var heroes = ['Doctor Strange', 'Spider Man', 'Batman', 'Nightwing'];
var randomNumber = Math.random(heroes);
var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];

console.log('value of maximumValue:', maximumValue);
randomNumber *= heroes.length;
console.log('value of randomIndex:', randomIndex);
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'HTML & CSS',
    author: 'Jon Duckett'
  },
  {
    title: 'JavaScript & jQuery',
    author: 'Jon Duckett'
  },
  {
    title: 'PHP & mySQL',
    author: 'Jon Duckett'
  }
];

var lastBook = library.pop();
var firstBook = library.shift();
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

console.log('value of lastBook:', lastBook);
console.log('value of firstBook:', firstBook);
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Jianni Cariaga';
var firstAndLastName = fullName.split(' ');
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('value of sayMyNAme:', sayMyName);
