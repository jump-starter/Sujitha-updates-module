const faker = require('faker');
const fs = require('fs');
// const db = require('./db.js');
// const projects = [];
const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/UpdatesAndComments';
// const mongoDB = 'mongodb://172.17.0.2/UpdatesAndComments';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('connected to mongo!!!');
});


const UpdateCommentSchema = new mongoose.Schema({
    id: Number,
    createdAt: Date,
    updates: [{
      title: String,
      body: String,
      date: Date,
      likes: Number,
      comments: [{
        userId: Number,
        avatar: String,
        username: String,
        date: Date,
        body: String,
      }],
    }],
    comments: [{
      userId: Number,
      avatar: String,
      username: String,
      date: Date,
      body: String,
    }],
  });
  
  const UpdateComment = mongoose.model('UpdatesComments', UpdateCommentSchema);
  
var generateRandomUpdates = function() {
    return Math.floor(Math.random() * 4);
}

var generateRandomForCommentsUpdates = function() {
    return Math.floor(Math.random() * 3);
}

var generateRandomComments = function() {
    return Math.floor(Math.random() * 21);
}

var generateRandomProjectId = function () {
    return Math.floor(Math.random() * 101);
}
var generateComments = function () {
    var commentsArray = [];
    var randomCount = generateRandomComments();
    for (var i = 0; i < randomCount; i++) {
        commentsArray.push({
            userId: faker.random.number(),
            avatar: faker.image.avatar(),
            username: faker.internet.userName(),
            date: faker.date.recent(),
            body: faker.lorem.sentence(),
        })
    }
    return commentsArray;
}
var generateUpdates = function () {
    var updatesArray = [];
    var randomCount = generateRandomUpdates();
    for (var i = 0; i < randomCount; i++) {
        updatesArray.push({
            title: faker.random.words(),
            body: faker.lorem.paragraphs(),
            date: faker.date.past(),
            likes: faker.random.number(),
            comments: generateCommentsForUpdates(),
        })
    }
    return updatesArray;
}
var generateCommentsForUpdates = function () {
    var commentsForUpdatesArray = [];
    var randomCount = generateRandomForCommentsUpdates();
    for (var i = 0; i < randomCount; i++) {
        commentsForUpdatesArray.push({
            userId: faker.random.number(),
            avatar: faker.image.avatar(),
            username: faker.internet.userName(),
            date: faker.date.recent(),
            body: faker.lorem.sentence(),
        })
    }
    return commentsForUpdatesArray;
}
var createData = function(start, end, filename) {
    let data = '';
    for (let i = start; i <= end; i++) {
        const updatecomment = {
            id : i,
            createdAt : faker.date.past(),
            updates : generateUpdates(),
            comments : generateComments()
        }   
        data += JSON.stringify(updatecomment) + '\n';
        if (i % 10 === 0) {
            fs.appendFileSync(filename, data);
            data = '';
        }
    }
    console.log('done')
}
module.exports.createData = createData;