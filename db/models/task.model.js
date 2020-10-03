const mongoose = require('mongoose');

//Create a schema
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  _listId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

//Create a model called Task based on above TaskSchema
const Task = mongoose.model('Task', TaskSchema);

module.exports = { Task };