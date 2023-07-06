const express = require('express');
const routes = express.Router();

const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getContactList);

routes.get('/:id', contactsController.getSingleContact);

routes.post('/', contactsController.addContact);

routes.put('/:id', contactsController.updateContact);

routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;
