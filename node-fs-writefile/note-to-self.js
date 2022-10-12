const fs = require('fs');
const process = require('process');

fs.writeFile('note.txt', process.argv[2] + '\n', 'utf8', err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
