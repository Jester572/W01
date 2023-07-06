const express = require('express');
const routes = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
const contactsController = require('../controllers/contacts');

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get('/', contactsController.getContactList);

routes.get('/:id', contactsController.getSingleContact);

routes.post('/', contactsController.addContact);

routes.put('/:id', contactsController.updateContact);

routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;
