import express from 'express';
import bodyParser from 'body-parser';

import messageController from './controller/messageController.js';

const app = express();

app.use(bodyParser.json());

app.use('/message', messageController);

app.listen(4000, '0.0.0.0', () => {
  console.log('server listening on http://0.0.0.0:4000');
});
