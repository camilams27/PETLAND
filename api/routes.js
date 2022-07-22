const express = require('express');
const routes = express.Router();

const controller = require('./controllers/controller');
const middleware = require('./middlewares/middleware');

routes.get('/clients', controller.clients);
routes.post('/clients', controller.createClient);
routes.put('/clients/:login', middleware.validateLogin, controller.updateClient);
routes.delete('/clients/:login', middleware.validateLogin, controller.deleteClient);
routes.post('/clients/login', controller.loginClient);

routes.get('/pets/:login', controller.pets);
routes.post('/pets/:login', controller.createPet);
routes.put('/pets/:login', controller.updatePet);
routes.delete('/pets/:login/:nome', controller.deletePet);

routes.get('/pets/cuidado/:tipo', controller.cuidados);

routes.post('/pet/check', controller.checklistPet);
routes.post('/pet/check/remove', controller.deleteChecklistPet);

routes.post('/pet/coleira', controller.coleiraPet);

module.exports = routes;