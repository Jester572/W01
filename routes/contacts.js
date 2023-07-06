const express = require('express');
const routes = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
const contactsController = require('../controllers/contacts');

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get('/contacts', contactsController.getContactList);

routes.get('/contacts/:id', contactsController.getSingleContact);

routes.post('/contacts', contactsController.addContact);

routes.put('/contacts/:id', contactsController.updateContact);

routes.delete('/contacts/:id', contactsController.deleteContact);

module.exports = routes;
