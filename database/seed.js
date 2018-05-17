const faker = require('faker');
const fs = require('fs');
const projects = [];
const mongoose = require('mongoose');

// const mongoDB = 'mongodb://localhost/UpdatesAndComments';
// const mongoDB = 'mongodb://172.17.0.2/UpdatesAndComments';
const mongoDB = 'mongodb://34.227.142.108:27017/updatecomments'

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

// const PROJECTS_SIZE = 1000000;
// const START_PROJECT_ID = 1;
// const PROJECT_BATCH_SIZE = 10000;

// const PROJECTS_SIZE = 3000000;
// const START_PROJECT_ID = 1000001;
// const PROJECT_BATCH_SIZE = 10000;

// const PROJECTS_SIZE = 3000000;
// const START_PROJECT_ID = 4000001;
// const PROJECT_BATCH_SIZE = 50000;

const PROJECTS_SIZE = 3050000;
const START_PROJECT_ID = 6950001;
const PROJECT_BATCH_SIZE = 100000;
// 1000000
// 1010000

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('connected to mongo!!!');
});

const UpdateCommentSchema = new mongoose.Schema({
    id: {type: Number , index:true},
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
  
const UpdateComment = mongoose.model('UpdateComment', UpdateCommentSchema);
  
var generateRandomUpdates = function() {
    return Math.floor(Math.random() * 2);
}

var generateRandomForCommentsUpdates = function() {
    return Math.floor(Math.random() * 2);
}

var generateRandomComments = function() {
    return Math.floor(Math.random() * 2);
}

// var generateRandomProjectId = function () {
//     return Math.floor(Math.random() * 101);
// }
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
            body: faker.lorem.sentence(),
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

var populate = async function() {
    let batch = [];

     for (var projectId = START_PROJECT_ID; projectId < PROJECTS_SIZE + START_PROJECT_ID; projectId++) {
        let updatecomment = {
        id : projectId,
        createdAt : faker.date.past(),
        updates : generateUpdates(),
        comments : generateComments()
        }
        batch.push(updatecomment);
        if (projectId % PROJECT_BATCH_SIZE === 0) {
        await UpdateComment.insertMany(batch)
            .then(() => {console.log('Wrote batch ' + projectId);})
            .catch((err) => console.log('error writing to db' + err));
            batch = [];
        }
       }
    };

    populate();
// var createData = function(start, end, filename) {
//     let data = '';
//     for (let i = start; i <= end; i++) {
//         const updatecomment = {
//             id : i,
//             createdAt : faker.date.past(),
//             updates : generateUpdates(),
//             comments : generateComments()
//         }   
//         data += JSON.stringify(updatecomment) + '\n';
//         if (i % 10 === 0) {
//             fs.appendFileSync(filename, data);
//             data = '';
//         }
//     }
//     console.log('done')
// }
// module.exports.createData = createData;