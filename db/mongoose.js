const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TaskManager', 
      { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => { console.log('Connected to MongoDB successfully!') })
  .catch((e) => { console.log('Error while trying to connect to MongoDB');
                  console.log(e)});

//To prevent deprecation warnings from (MongoDB native driver) add the ffling options
// mongoose.set('userCreateIndex', true);
// mongoose.set('userFindAndModify', false);
// mongoose.set('useUnifiedTopology', true);

module.exports = { mongoose };