const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./routers/indexRouter');
const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, "public")));
app.use('/api', indexRouter);

app.listen(3000, () => console.log('Server is running on 3000'));