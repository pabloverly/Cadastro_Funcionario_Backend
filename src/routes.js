const express = require('express')
//const UserController = require('./controllers/UserController')
const SelectController = require('./controllers/SelectController')
const InsertController = require('./controllers/InsertController')


const routes = express.Router();

//routes.post('/UserController', UserController.select)
routes.get('/SelectController', SelectController.select)
routes.post('/InsertController', InsertController.Insert)


module.exports = routes