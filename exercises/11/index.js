const express = require('express');
const searchRouter = require('./routers/search');

const app = express();

app.use('/api', searchRouter);

app.listen(3000, function(){
    console.log(`Server is running on port 3000...`);
});