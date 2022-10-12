const fs = require('fs');
const number = Math.random().toString() + '\n';
fs.writeFile('random.txt', number, 'utf8', err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
