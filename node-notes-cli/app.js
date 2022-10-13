const data = require('./data.json');
// const fs = require('fs');

if (process.argv[2] === 'read') {
  read(data);
} else if (process.argv[2] === 'add') {
  add(data);
}

function read(object) {
  for (const property in object.notes) {
    console.log(`${property}: ${object.notes[property]}`);
  }
}

function add(object) {
  // console.log(object.nextId);
  // console.log(process.argv[3]);
  data.notes[data.nextId] = process.argv[3];
  // console.log(data.notes[data.nextId] = process.argv[3]);
}
