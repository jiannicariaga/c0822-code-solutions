const object = require('./data.json');

if (process.argv[2] === 'read') {
  for (const property in object.notes) {
    console.log(`${property}: ${object.notes[property]}`);
  }
}
