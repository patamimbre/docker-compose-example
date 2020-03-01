'use strict';
const db = exports;
const mongoose = require('mongoose');

db.connect = async function () {
  let options = {
    useMongoClient: true
  };
  const URL = `mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/tasks`
  await mongoose.connect(URL, options);
};

