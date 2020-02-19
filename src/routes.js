const express = require('express');
const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth')

const UserController = require('./app/controllers/UserController');
const SessionsController = require('./app/controllers/SessionsController');

routes.post('/users', UserController.store);
routes.post('/sessions', SessionsController.store);

routes.get('/teste', authMiddleware, (req, res) => res.json({ ok: true }))

module.exports = routes;

