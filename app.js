const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const userRouter = require('./routes/users.route')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(userRouter);
app.use(cors());

module.exports = app;