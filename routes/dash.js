const express = require('express');
const Dash = express.Router();
const controllers = require('../controllers/dash');

Dash.route('/funcionarios/:fkgestor')
    .get(controllers.getFunc);

Dash.route('/historico/:idfunc')
    .get(controllers.getHistoryFunc);

Dash.route('/sites/:idgestor')
    .get(controllers.getSixSites)

module.exports = Dash;
