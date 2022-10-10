const book = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};
const { title, author, libraryID } = book;
console.log(`The title of the book is ${title}, the author is ${author}, and the library id is ${libraryID}`);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};
const { title: bookName, author: bookWriter, libraryID: bookNumber } = book2;
console.log(`The title of the book is ${bookName}, the author is ${bookWriter}, and the library id is ${bookNumber}`);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];
const [book3, book4, book5] = library;
const [, , , book6] = library;

console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);
console.log('book6:', book6);
