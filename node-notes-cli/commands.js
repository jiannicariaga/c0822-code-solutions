const fs = require('fs');

function readNotes(object) {
  for (const property in object.notes) {
    console.log(`${property}: ${object.notes[property]}`);
  }
}

function addNote(object) {
  object.notes[object.nextId] = process.argv[3];
  object.nextId++;

  fs.writeFile('./data.json', JSON.stringify(object, null, 2), err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
}

function deleteNote(object) {
  delete object.notes[process.argv[3]];

  fs.writeFile('./data.json', JSON.stringify(object, null, 2), err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
}

function editNote(object) {
  object.notes[process.argv[3]] = process.argv[4];

  fs.writeFile('./data.json', JSON.stringify(object, null, 2), err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
}

module.exports = {
  readNotes,
  addNote,
  deleteNote,
  editNote
};
