const express = require('express');
const file = require('./FakeOrgJSON.json');
const app = express();
const PORT = 3000;

app.get('/api/orgchart', (req, res, next) => {
  res.json(file);
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(PORT, () =>
  console.log(`
Listening on port ${PORT}
http://localhost:3000/
`)
);
