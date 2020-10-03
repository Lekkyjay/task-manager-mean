const mongoose = require('mongoose');

//Create a schema
const ListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  // with auth
  _userId: {
    type: mongoose.Types.ObjectId,
    required: true
}
});

//Create a model called List based on above ListSchema
const List = mongoose.model('List', ListSchema);

module.exports = { List };