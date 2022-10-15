const fs = require('fs');
const data = require('./data.json');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const list = [];
  for (const id in data.notes) {
    list.push(data.notes[id]);
  }
  res.send(list);
});

app.get('/api/notes/:id', (req, res) => {
  if (!Number.isInteger(Number(req.params.id))) {
    res.status(400);
    res.json({ error: 'id must be a positive integer.' });
  } else if (!(req.params.id in data.notes)) {
    res.status(404);
    res.json({ error: `cannot find note with id ${req.params.id}.` });
  } else {
    res.status(200);
    res.send(data.notes[req.params.id]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400);
    res.json({ error: 'content is a required field.' });
  } else {
    const newNote = req.body;
    newNote.id = data.nextId;
    data.notes[data.nextId] = newNote;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ error: 'an unexpected error has occured.' });
      } else {
        res.status(201);
        res.json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (!Number.isInteger(Number(req.params.id))) {
    res.status(400);
    res.json({ error: 'id must be a positive integer.' });
  } else if (!(req.params.id in data.notes)) {
    res.status(404);
    res.json({ error: `cannot find note with id ${req.params.id}.` });
  } else {
    delete data.notes[req.params.id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ error: 'an unexpected error has occured.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (!req.body.content) {
    res.status(400);
    res.json({ error: 'content is a required field.' });
  } else if (!Number.isInteger(Number(req.params.id))) {
    res.status(400);
    res.json({ error: 'id must be a positive integer.' });
  } else if (!(req.params.id in data.notes)) {
    res.status(404);
    res.json({ error: `cannot find note with id ${req.params.id}.` });
  } else {
    data.notes[req.params.id].content = req.body.content;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ error: 'an unexpected error has occured.' });
      } else {
        res.status(200);
        res.json(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000.');
});
