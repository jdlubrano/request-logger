const path = require('path');

require('dotenv').config()

const random = require('lodash.random');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const IMAGES = [
  'pooh.png',
  'rexcellent.gif'
];

app.use(cors());
app.use(express.json());
app.use('/', express.static('public'));

app.get('/ping', (req, res) => res.send('pong'));

app.post('/logs', (req, res) => {
  console.log(`
    INCOMING REQUEST POST /logs
    HEADERS: ${JSON.stringify(req.headers)}
    PARAMS: ${JSON.stringify(req.query)}
    BODY: ${JSON.stringify(req.body)}
  `);

  res.status(200).send();
});

app.post('/v2/logs', (req, res) => {
  console.log(`
    INCOMING REQUEST POST /v2/logs
    HEADERS: ${JSON.stringify(req.headers)}
    PARAMS: ${JSON.stringify(req.query)}
    BODY: ${JSON.stringify(req.body)}
  `);

  res.status(200).send();
});

app.get('/images/:clientId/:imageId?', (req, res) => {
  console.log(`
    INCOMING REQUEST GET /images
    HEADERS: ${JSON.stringify(req.headers)}
    QUERY PARAMS: ${JSON.stringify(req.query)}
    ROUTE PARAMS: ${JSON.stringify(req.params)}
  `);

  options = {
    root: path.join(__dirname, 'public')
  }

  imageIndex = random(0, IMAGES.length - 1, false);
  image = IMAGES[imageIndex];

  console.log(`Rendering ${image}`);

  res.sendFile(image, options);
});

app.listen(port, () => console.log(`request-logger listening on port ${port}!`));
