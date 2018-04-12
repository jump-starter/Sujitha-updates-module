const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/updates', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
