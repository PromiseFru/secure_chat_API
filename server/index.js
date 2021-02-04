const http = require('http');
const express = require('express');
const logger = require('morgan');
require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
    console.log(`Listening on port ${port}`);
})