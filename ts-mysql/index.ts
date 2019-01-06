// const express = require('express');
import * as express from 'express';
import indexRouter from './routers/indexRouter';

const app: express.Application = express();

app.use('/', indexRouter);

app.listen(3000, () => console.log('Server is running on 3000'));