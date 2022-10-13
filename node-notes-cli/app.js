const data = require('./data.json');
const commands = require('./commands.js');

if (process.argv[2] === 'read') {
  commands.readNotes(data);
} else if (process.argv[2] === 'add') {
  commands.addNote(data);
} else if (process.argv[2] === 'delete') {
  commands.deleteNote(data);
} else if (process.argv[2] === 'edit') {
  commands.editNote(data);
} else {
  console.log(`Invalid command: ${process.argv[2]}`);
}
