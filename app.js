require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => console.log(`request-logger listening on port ${port}!`));
