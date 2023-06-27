const express = require('express');
const routes = express.Router();

contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getContactList);
// routes.get('/:id', contactsController.getSingle);

module.exports = routes;