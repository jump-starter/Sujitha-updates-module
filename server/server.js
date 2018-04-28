const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');
const cors = require('cors');
const bluebird = require('bluebird');
const redis = require('redis');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const app = express();
const client = redis.createClient(6379, 'localhost')
const port = 3004;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/updates/:id', (req, res) => {
  console.log('get request happening ');
  client.getAsync(req.params.id)
    .then((project) => {
      if (project !== null) {
        res.status(200);
        console.log("redis", project);
        res.send(project);
      } else {
        db.loadProject(req.params.id, (err, projects) => {
          if (err) {
            console.log('ERROR LOADING PROJECT', err);
          } else {            
            const proj = JSON.stringify(projects)
            res.send(projects);
            client.set(req.params.id, proj);
          }
        })
      };
    })
    .catch((err) => {
      res.status(400);
      res.send(err);
    })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

