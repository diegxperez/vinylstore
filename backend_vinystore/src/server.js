const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const mountRoutes = require('./routes');
const server = express();

server.use(express.json());
server.use(cors())
server.use(morgan('dev'));

mountRoutes(server);

server.use(logErrors);
server.use(boomErrorHandler);
server.use(errorHandler);

module.exports = server;