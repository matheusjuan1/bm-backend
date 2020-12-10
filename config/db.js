const mssql = require('mssql');

const connection = {
    user: process.env.DB_USER, // USUARIO DO BANCO
        password: process.env.DB_PASSWORD, // SENHA DO BANCO
        server: process.env.DB_SERVER, // LOCAL ONDE O BANCO ESTA HOSPEDADO
        database: process.env.DB_DATABASE, // NOME DO BANCO DE DADOS
        options: {
            encrypt: true
        }
}

function query(sql) {
    return new Promise ((resolve, reject) => {
        mssql.connect(connection, error => {
            if(error) {
                throw error;
            }

        var request = new mssql.Request();
        request.query(sql, (error, result) => {
            if(error) reject(error)
            resolve(result);
        });
    });

        mssql.on('error', error => {
            console.log(`Erro ao conectar no banco de dados ${error}`)
        });
    });
}

module.exports = { query };