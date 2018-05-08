const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');
const cors = require('cors');

const app = express();
const port = 3004;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/project/:projectid', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/updates/:id', (req, res) => {
  db.loadProject(req.params.id, (err, projects) => {
    if (err) {
      console.log('ERROR LOADING PROJECT', err);
    } else {
      const proj = JSON.stringify(projects)
      res.send(projects);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});