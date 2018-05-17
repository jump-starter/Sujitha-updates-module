const nr = require('newrelic');

// var cluster = require('cluster');
// if (cluster.isMaster) {

//   // Count the machine's CPUs
//   var cpuCount = require('os').cpus().length;

//   // Create a worker for each CPU
//   for (var i = 0; i < cpuCount; i += 1) {
//     cluster.fork();
//   }

//   // Code to run if we're in a worker process
// } else {

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
  //const client = redis.createClient({host: 'localhost', port: 6379});
  // const client = redis.createClient('6379', '172.17.0.2');
  // const redisHost = process.env.NODE_ENV === 'production' ? '172.17.0.3' : '127.0.0.1';
  // const redisHost = process.env.REDIS_HOST || 'localhost';
  //for docker
  // const client = redis.createClient('6379', '172.17.0.2');

  //for localhost
  const client = redis.createClient('6379', "172.17.0.2");
  // const client = redis.createClient();
  
  const port = process.env.PORT || 3004;

  app.use(cors());
  app.use(bodyParser.json());
  app.use('/project/:projectid', express.static(path.join(__dirname, '/../client/dist')));

  app.get('/api/updates/:id', (req, res) => {
    console.log('/api/updates/:id', req.params)
    client.getAsync(req.params.id)
      .then((project) => {
        console.log('project', project)
        if (project !== null) {
          console.log('From Redis-', project);
          res.status(200);
          res.send(project);
        } else {
          db.loadProject(req.params.id, (err, projects) => {
            if (err) {
              console.log('ERROR LOADING PROJECT', err);
            } else {
              const proj = JSON.stringify(projects);
              console.log('proj inside server, Not from redis -', projects)
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
  // const express = require('express');
  // const bodyParser = require('body-parser');
  // const path = require('path');
  // const db = require('../database/db.js');
  // const cors = require('cors');

  // const app = express();
  // const port = 3004;

  // app.use(cors());
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use('/project/:projectid', express.static(path.join(__dirname, '/../client/dist')));

  // app.get('/api/updates/:id', (req, res) => {
  //   console.log('test');
  //   db.loadProject(req.params.id, (err, projects) => {
  //     if (err) {
  //       console.log('ERROR LOADING PROJECT', err);
  //     } else {
  //       const proj = JSON.stringify(projects)
  //       res.send(projects);
  //     }
  //   });
  // });

  // app.listen(port, () => {
  //   console.log(`listening on port ${port}`);
  // });

//}



// const nr = require('newrelic');
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const db = require('../database/db.js');
// const cors = require('cors');

// const app = express();
// const port = 3004;

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/project/:projectid', express.static(path.join(__dirname, '/../client/dist')));

// app.get('/api/updates/:id', (req, res) => {
//   console.log('test');
//   db.loadProject(req.params.id, (err, projects) => {
//     if (err) {
//       console.log('ERROR LOADING PROJECT', err);
//     } else {
//       const proj = JSON.stringify(projects)
//       res.send(projects);
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });