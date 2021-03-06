const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/updatecomments';
// const mongoDB = 'mongodb://172.17.0.2/UpdatesAndComments';
mongoose.connect(mongoDB);

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

const UpdateComment = mongoose.model('UpdateComment', UpdateCommentSchema);

const loadProject = (projectId, callback) => {
  console.log('inside db load-', projectId)
  UpdateComment.find({id: projectId }, function(err, result) {
      if (err) {
        console.log('errr in if-', err)
        callback(err, null);
        return;
    }
    callback(null, result);
    //console.log('result in if-', result)

    return;
    });
};
// const updatecomment = new Updatecomment({
//   id: 1,
//   createdAt: 2
// });

// Updatecomment.create(updatecomment, function(err, result) {
//   if (err) {
//     console.log('errr in saving-', err)
//     return;
// }
//   console.log('saved -', result)

//   return;
// });

// Updatecomment.find({id: 1}, function(err, result) {
//   if (err) {
//     console.log('errr in find-', err)
//     return;
// }
//   console.log('result in find-', result)

//   return;
// });

//var start = Date.now();

// loadProject('1', (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     var delay = (Date.now() - start);
//     console.log("res and delay-", res, delay)
//   } 
// });


//module.exports.db = db;
// // module.exports.UpdateComments = UpdateComments;
module.exports.loadProject = loadProject;
// module.exports.updateandcomment = updateandcomment;


// db.UpdateComment.createIndex({id: 1},function(err, result) {
//   if (err) {
//     console.log('err during indexing-', err);
//   } else {
//     console.log('done indexing');
//   }
// });
