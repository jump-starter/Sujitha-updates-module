const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/data/db';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

const UpdateCommentsSchema = new Schema({
  id: Number,
  updates: [{
    title: String,
    body: String,
    date: Date,
    Likes: Number,
    Comments: [{
      username: String,
      date: Date,
      body: String
    }]

  }],
  comments: [{
    username: String,
    date: Date,
    body: String,
  }],
});

