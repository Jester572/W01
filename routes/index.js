const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.jesseRoute);
routes.get('/jazlynn', lesson1Controller.jazlynnRoute);
routes.get('/evelynn', lesson1Controller.evelynnRoute);

module.exports = routes;