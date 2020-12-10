const db = require('../config/db');

class Dash {
    
    sites(idgestor) {
        const sql = `SELECT TOP 6 COUNT(titulo) as 'quantidade', titulo FROM historico,maquina,funcionario WHERE fkmaquina = idmaquina AND fkfuncionario = idfuncionario AND fkgestor = ${idgestor} GROUP BY titulo ORDER BY 'quantidade' DESC`;
        return db.query(sql);
    }
    funcionarios(fkGestor) {
        const sql = `SELECT * FROM funcionario,maquina WHERE idfuncionario = fkfuncionario AND fkgestor = ${fkGestor}`;
        return db.query(sql);
    }
    allHistoryByFK (idfunc) {
        const sql = `SELECT idhistorico,urls,datahora,titulo FROM historico,maquina,funcionario where fkmaquina = idmaquina and fkfuncionario= idfuncionario and idfuncionario= ${idfunc}`;
        return db.query(sql);
    }
}

module.exports = Dash;