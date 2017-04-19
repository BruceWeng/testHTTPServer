'use strict';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import pug from 'pug';
let app = express();

app.use('/', express.static('public'))

app.get('/', (req, res) => {
  res.format({
    'text/plain': () => {
      res.send('text response');
    },
    'text/html': () => {
      res.render('index.html')
    },
    'application/json': () => {
      res.json({ name: 'SRD7 BOM System'});
    }
  });
});

app.post('/', (req, res) => {
  res.json({message: 'Hello from Bruce :)'});
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
