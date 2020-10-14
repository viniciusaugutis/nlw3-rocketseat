import express from 'express';
import './database/connection';

const app = express();

app.get('/users', (request, response) => {
  return response.send({ message: 'Text' });
});

app.listen(3333);
