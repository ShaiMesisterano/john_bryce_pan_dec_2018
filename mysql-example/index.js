const express = require('express');
const indexRouter = require('./routers/indexRouter')
const app = express();

app.use('/', indexRouter);

app.listen(3000, () => console.log('Server is running on 3000'));