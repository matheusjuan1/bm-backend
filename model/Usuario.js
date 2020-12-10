const db = require('../config/db');

class Usuario {
    
    index(id) {
        const sql = `SELECT * FROM gestor WHERE idgestor = '${id}'`;
        return db.query(sql);
    }
    create(nome, email, empresa, senha) {
        const sql = `INSERT INTO gestor (nome, email, empresa, senha) VALUES ('${nome}', '${email}', '${empresa}', '${senha}')`;
        return db.query(sql);
    }
    login(email) {
        const sql = `SELECT * FROM gestor WHERE email = '${email}'`;
        return db.query(sql);
    }   
    delete(id) {
        const sql = `DELETE FROM funcionario where idfuncionario = '${id}'`;
        return db.query(sql);
    }
}

module.exports = Usuario;