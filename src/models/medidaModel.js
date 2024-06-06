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

function salvarResultados(acertos, erros, dataQuiz, fk_usuario) {
    const instrucaoSql = `
        INSERT INTO quiz_resultados (acertos, erros, dataQuiz, fk_usuario)
        VALUES ('${acertos}', '${erros}', '${dataQuiz}', '${fk_usuario}');
    `;
    return database.executar(instrucaoSql, [acertos, erros, dataQuiz, fk_usuario]);
}

function obterUltimosAcertosErros(fk_usuario) {
    const instrucaoSql = `
        SELECT acertos, erros ,DATE_FORMAT(dataQuiz, '%d/%m/%Y') AS data
        FROM quiz_resultados
        WHERE fk_usuario = '${fk_usuario}'
        ORDER BY dataQuiz
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listarJogadores,
    calcularMediaAcertos,
    obterClassificacao,
    salvarResultados,
    obterUltimosAcertosErros
};
