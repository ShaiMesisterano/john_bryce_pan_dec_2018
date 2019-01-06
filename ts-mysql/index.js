"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express = require("express");
const indexRouter_1 = require("./routers/indexRouter");
const app = express();
app.use('/', indexRouter_1.default);
app.listen(3000, () => console.log('Server is running on 3000'));
