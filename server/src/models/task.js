const mongoose = require('mongoose');

const Tasks = mongoose.model('Task', new mongoose.Schema({
    short_description: String,
    long_description: String
}, { timestamps: true }));

module.exports = Tasks

