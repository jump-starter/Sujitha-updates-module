const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/UpdatesAndComments';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('connected to mongo!!!');
});

const updatesCommentsSchema = mongoose.Schema({
  id: Number,
  updates: [{
    title: String,
    body: String,
    date: Date,
    Likes: Number,
    Comments: [{
      username: String,
      date: Date,
      body: String,
    }],
  }],
  comments: [{
    username: String,
    date: Date,
    body: String,
  }],
});

const UpdatesAndComments = mongoose.model('UpdatesComments', updatesCommentsSchema);

module.exports.db = db;
module.exports.updatesCommentsSchema = updatesCommentsSchema;
