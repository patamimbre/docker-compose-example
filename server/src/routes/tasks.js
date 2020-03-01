'use strict';

const express = require('express');
const router = express.Router();
const Tasks = require('../models/task')

router.post('/', async (req, res) => {
  const { short_description, long_description } = req.body;
  console.log(req.body)
  console.log(long_description)

  const newTask = new Tasks({
    short_description,
    long_description
  });

  await newTask.save();

  const tasks = await Tasks.find({}).sort({ createdAt: 1 })

  return res.status(200).send(tasks);

});

router.get('/', async (req, res) => {
  const tasks = await Tasks.find({}).sort({ createdAt: 1 })
  return res.status(200).send(tasks);
})

module.exports = router

