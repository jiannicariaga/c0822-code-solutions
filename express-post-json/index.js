const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const arr = [];

  for (const id in grades) {
    arr.push(grades[id]);
  }

  res.json(arr);
});

app.use(express.json());

app.post('/api/grades/', (req, res) => {
  const newValue = req.body;
  newValue.id = nextId;
  grades[nextId] = newValue;
  nextId++;
  res.status(201).send(newValue);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
