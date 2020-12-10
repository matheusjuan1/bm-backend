const Usuario = require('../model/Usuario');
const usuario = new Usuario();

module.exports = {
    add: function (req, res) {
        usuario.create(req.body.nome, req.body.email, req.body.empresa, req.body.senha).then(
            function () {
                res.status(201).send({mensagem: "Cadastro realizado com sucesso!"});
            }
        ).catch(function (erro) {
            res.status(400).send(erro)
        })
    },
    auth: function (req, res) {
        usuario.login(req.body.email).then(function (usuario) {
            if (usuario.recordset.length < 1) {
                res.status(404).send("Email e/ou senha inválidos!")
            }
            else if (usuario.recordset[0].senha != req.body.senha) {
                res.status(401).send("Email e/ou senha inválidos!")
            } else {
                res.status(200).send(usuario.recordset[0])
            }
        }).catch(function (erro) {
            res.status(400).send(erro)
        })
    },
    getById: function (req, res) {
        usuario.index(req.params.idgestor).then(function (response) {
            res.status(200).send(response);
        }).catch(function (erro){
            res.status(400).send(erro);
        })
    },
    deleteFunc: function (req,res) {
        usuario.delete(req.params.idfunc).then(function (response) {
            res.status(200).send(response);
        }).catch(function (erro) {
            res.status(400).send(erro);
        })
    }
}