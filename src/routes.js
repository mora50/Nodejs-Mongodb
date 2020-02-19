const express = require('express');
const routes = express.Router();

const UserController = require('./app/controllers/UserController');
const SessionsController = require('./app/controllers/SessionsController');

routes.post('/users', UserController.store);
routes.post('/sessions', SessionsController.store);



module.exports = routes;

