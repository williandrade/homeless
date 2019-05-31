const db = require('./../../config/db/dbMysql.js')();

class PessoaProcuradaAcaoDAO {

	findByID(id){

		let query = `SELECT * FROM usuarios_acoes WHERE id_pessoa_procurada = ? ORDER BY data DESC`;

		let params = [id];

	    return db.executeQuery(query, params);
	};

	insert(object){

		let query = `INSERT INTO pessoas_procuradas_acoes
						(id_pessoa_procurada, id_acao, visto_em)
					VALUES
						(?, ?, ?)`;

		let params = [object.id_pessoa_procurada, object.id_acao, object.visto_em];

	    return db.executeQuery(query, params);
	};

};

module.exports = new PessoaProcuradaAcaoDAO();