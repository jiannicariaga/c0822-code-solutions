const data = require('./data.json');
const commands = require('./commands.js');
const input = process.argv[2];

if (input === 'read') {
  commands.readNotes(data);
} else if (input === 'add') {
  commands.addNote(data);
} else if (input === 'delete') {
  commands.deleteNote(data);
} else if (input === 'edit') {
  commands.editNote(data);
} else {
  console.log(`Invalid command: ${process.argv[2]}`);
}
