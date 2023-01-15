import express, { Express, Request, Response } from 'express';
import createError from 'http-errors';
import cors from 'cors';
import { router } from './routes/routes.js';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

const port = 8800;
app.listen(port, () => {
  console.log('Connected to server');
});