const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');
const cors = require('cors');
const bluebird = require('bluebird');
// const redis = require('redis');
// bluebird.promisifyAll(redis.RedisClient.prototype);
// bluebird.promisifyAll(redis.Multi.prototype);

const app = express();
// const client = redis.createClient(6379, '172.17.0.3');
const port = 3004;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/project/:projectid', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/updates/:id', (req, res) => {
  // client.getAsync(req.params.id)
  //   .then((project) => {
  //     if (project !== null) {
  //       res.status(200);
  //       res.send(project);
  //     } else {
    console.log('req params ins erver -', req.params)
        db.loadProject(req.params.id, (err, projects) => {
          if (err) {
            console.log('ERROR LOADING PROJECT', err);
          } else {            
            const proj = JSON.stringify(projects);
            // console.log('proj inside server-', projects)
            res.send(projects);
            // client.set(req.params.id, proj);
          }
        })
    //   };
    // })
    // .catch((err) => {
    //   res.status(400);
    //   res.send(err);
    // })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});