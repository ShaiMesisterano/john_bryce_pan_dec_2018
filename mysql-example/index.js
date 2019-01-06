const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routers/indexRouter');
const app = express();

app.use(bodyParser.json());

app.use('/', indexRouter);

app.listen(3000, () => console.log('Server is running on 3000'));