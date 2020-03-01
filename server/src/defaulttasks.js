'use strict';

const defaultTasks = exports;
const Tasks = require('./models/task')

defaultTasks.createDefaultTasks = async () => {
  try {

    const count = await Tasks.count({});

    if (count !== 0) return;

    const task1 = new Tasks({
      short_description: "Task-1",
      long_description: "Example"
    });
    const task2 = new Tasks({
      short_description: "Task-2",
      long_description: "Example 2"
    });
    const task3 = new Tasks({
      short_description: "Task-3",
      long_description: "Example 3"
    });
    const task4 = new Tasks({
      short_description: "Task-4",
      long_description: "Example 4"
    });
    const task5 = new Tasks({
      short_description: "Task-5",
      long_description: "Example 5"
    });

    task1.save()
    task2.save()
    task3.save()
    task4.save()
    task5.save()
  } catch (err) {
    throw err;
  }
};
