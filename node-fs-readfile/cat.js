const fs = require('fs');
const numOfArguments = process.argv.length;
const indexOfArgument = 2;

function catFiles(currentArgument) {
  if (currentArgument < numOfArguments) {
    fs.readFile(process.argv[currentArgument], 'utf8', (err, data) => {
      errorHandler(err);
      console.log(data);
    });

    currentArgument++;
    catFiles(currentArgument);
  }
}

function errorHandler(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
}

catFiles(indexOfArgument);
