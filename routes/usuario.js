const express = require('express');
const Usuario = express.Router();
const controllers = require('../controllers/usuario');

Usuario.route('/cadastrar')
        .post(controllers.add);

Usuario.route('/:idgestor')
        .get(controllers.getById);

Usuario.route('/autenticar')
        .post(controllers.auth);

Usuario.route('/:idfunc')
        .delete(controllers.deleteFunc);

module.exports = Usuario;