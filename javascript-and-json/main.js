var books = [
  {
    isbn: '978-1118008188',
    title: 'HTML and CSS: Design and Build Websites',
    author: 'Jon Duckett'
  },
  {
    isbn: '978-1118531648',
    title: 'JavaScript and jQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett'
  },
  {
    isbn: '978-1119149224',
    title: 'PHP & MySQL: Server-side Web Development',
    author: 'Jon Duckett'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

var stringifiedObject = JSON.stringify(books);
console.log('stringifiedObject:', stringifiedObject);
console.log('typeof stringifiedObject:', typeof stringifiedObject);

var jsonString = '[{"id":"014335202","name":"Jianni Cariaga"}]';
console.log('jsonString:', jsonString);
console.log('typeof jsonString:', typeof jsonString);

var parsedString = JSON.parse(jsonString);
console.log('parsedString:', parsedString);
console.log('typeof parsedString:', typeof parsedString);
