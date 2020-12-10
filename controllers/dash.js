const Dash = require('../model/Dash');
const dash = new Dash();

module.exports = {
    getFunc: function (req, res) {
        dash.funcionarios(Number(req.params.fkgestor)).then(function (response) {
            res.status(200).send(response);
        }).catch(function (erro) {
            res.status(400).send(erro);
        })
    },
    getHistoryFunc: function (req, res) {
        dash.allHistoryByFK(req.params.idfunc).then(function (response) {
            res.status(200).send(response);
        }).catch(function (erro) {
            res.status(400).send(erro);
        })
    },
    getSixSites: function (req, res) {
        dash.sites(req.params.idgestor).then(function  (response) {
            res.status(200).send(response)
        }).catch(function (erro) {
            res.status(400).send(erro)
        })
    }
}