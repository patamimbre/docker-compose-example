'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
const corsOptions = {
  origin: true
};


app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

// Enable cross origin
app.use(function(err, req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  // eslint-disable-next-line no-console
  console.log(err);
  next();
});



// Database connection
const db = require('./db/db');
db.connect();
const defaultTasks = require('./defaulttasks');
defaultTasks.createDefaultTasks();

app.get('/api', (req, res) => {
  res.status(200).send('API works.');
});

// Import routes
const tasksRoutes = require('./routes/tasks');

app.use('/api/tasks', tasksRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.info(`Express server listening on port ${port}`);
});
