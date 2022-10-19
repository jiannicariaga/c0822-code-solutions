const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: { rejectUnauthorized: false }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const allGrades = result.rows;
      res.json(allGrades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.post('/api/grades', (req, res) => {
  const course = req.body.course;
  const name = req.body.name;
  const score = req.body.score;
  if (!course || !name || !score) {
    res.status(400).json({ error: 'course, name, and score are required fields.' });
    return;
  }
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'score must be a integer between 0 and 100.' });
    return;
  }
  const sql = `
    insert into "grades" ("course", "name", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const params = [course, name, score];
  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000.');
});
