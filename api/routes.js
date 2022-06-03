const express = require('express');
const routes = express.Router();

const controller = require('./controllers/controller');
const middleware = require('./middlewares/middleware');

routes.get('/clients', controller.clients);
routes.post('/clients', controller.createClient);
routes.put('/clients/:login', middleware.validateLogin, controller.updateClient);
routes.delete('/clients/:login', middleware.validateLogin, controller.deleteClient)

module.exports = routes;