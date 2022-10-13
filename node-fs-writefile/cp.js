const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  errorHandler(err);
  fs.writeFile(process.argv[3], data, 'utf8', err => {
    errorHandler(err);
  });
});

function errorHandler(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
}
