const express = require('express');
const path = require('path');
const app = express();

const publicDir = path.join(__dirname, 'public');
const files = express.static(publicDir);

app.use(files);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000.');
});
