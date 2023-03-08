import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import messageController from './controller/messageController.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// eslint-disable-next-line no-unused-vars
app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use('/message', messageController);

app.listen(4000, '0.0.0.0', () => {
  console.log('server listening on http://0.0.0.0:4000');
});
