const fs = require('fs');
module.exports = {
  readNotes,
  addNote,
  deleteNote,
  editNote
};

function readNotes(object) {
  for (const property in object.notes) {
    console.log(`${property}: ${object.notes[property]}`);
  }
}

function addNote(object) {
  object.notes[object.nextId] = process.argv[3];
  object.nextId++;

  fs.writeFile('./data.json', JSON.stringify(object, null, 2), err => {
    errorHandler(err);
  });
}

function deleteNote(object) {
  delete object.notes[process.argv[3]];

  fs.writeFile('./data.json', JSON.stringify(object, null, 2), err => {
    errorHandler(err);
  });
}

function editNote(object) {
  object.notes[process.argv[3]] = process.argv[4];

  fs.writeFile('./data.json', JSON.stringify(object, null, 2), err => {
    errorHandler(err);
  });
}

function errorHandler(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
}
