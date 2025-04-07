const express = require("express");
const morgan = require('morgan');

const mountRoutes = require('./routes');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('Hi from server');
});

mountRoutes(server);

module.exports = server;