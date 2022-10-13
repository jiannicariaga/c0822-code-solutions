const fs = require('fs');

fs.readFile('./dijkstra.txt', 'utf8', (err, data) => {
  errorHandler(err);
  console.log(data);
});

function errorHandler(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
}
