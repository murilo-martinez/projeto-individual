const database = require('../database/config');

function salvarContatoo(nome, email, mensagem) {
    var instrucaoSql = `
        INSERT INTO contato (nome, email, mensagem) VALUES ('${nome}', '${email}', '${mensagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
	salvarContatoo
};
