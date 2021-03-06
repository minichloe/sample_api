const express = require('express');
const file = require('./FakeOrgJSON.json');
const getOrgChart = require('./request');
const app = express();
const PORT = 3000;

// Set up sample api route
app.get('/api/orgchart', (req, res, next) => {
  res.json(file);
});

// Basic error handling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Open the server and run the single GET request
const server = app.listen(PORT, () => {
  console.log(`
  Listening on port ${PORT}
  http://localhost:3000/
  `);
  getOrgChart();
});

// Close the server after request is completed
setTimeout(() => server.close(), 50);
