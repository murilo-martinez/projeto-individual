const database = require('../database/config');

function listarJogadores() {
	const instrucaoSql = 'SELECT nome FROM usuario';
	return database.executar(instrucaoSql);
}

function calcularMediaAcertos() {
	const instrucaoSql = 'SELECT AVG(acertos) AS media_acertos FROM quiz_resultados';
	return database.executar(instrucaoSql);
}

function obterClassificacao() {
	const instrucaoSql = `
        SELECT usuario.nome, quiz_resultados.acertos
        FROM quiz_resultados
        JOIN usuario ON quiz_resultados.fk_usuario = usuario.id
        ORDER BY quiz_resultados.acertos DESC
    `;
	return database.executar(instrucaoSql);
}

function salvarResultados(acertos, erros, fk_usuario) {
    const instrucaoSql = `
        INSERT INTO quiz_resultados (acertos, erros, fk_usuario)
        VALUES (${acertos}, ${erros}, ${fk_usuario});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listarJogadores,
    calcularMediaAcertos,
    obterClassificacao,
    salvarResultados
};
