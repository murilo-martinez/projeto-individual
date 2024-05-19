const medidaModel = require('../models/medidaModel.js');

function listarJogadores(req, res) {
	medidaModel.listarJogadores()
		.then(result => res.status(200).json(result))
		.catch(erro => {
			console.error('Erro ao listar jogadores:', erro.sqlMessage);
			res.status(500).json(erro.sqlMessage);
		});
}

function mediaAcertos(req, res) {
	medidaModel.calcularMediaAcertos()
		.then(result => res.status(200).json(result))
		.catch(erro => {
			console.error('Erro ao calcular média de acertos:', erro.sqlMessage);
			res.status(500).json(erro.sqlMessage);
		});
}

function classificacao(req, res) {
	medidaModel.obterClassificacao()
		.then(result => res.status(200).json(result))
		.catch(erro => {
			console.error('Erro ao obter classificação:', erro.sqlMessage);
			res.status(500).json(erro.sqlMessage);
		});
}

function mediaAcertosErros(req, res) {
	medidaModel.calcularMediaAcertosErros()
		.then(result => res.status(200).json(result))
		.catch(erro => {
			console.error('Erro ao calcular média de acertos e erros:', erro.sqlMessage);
			res.status(500).json(erro.sqlMessage);
		});
}

module.exports = {
	listarJogadores,
	mediaAcertos,
	classificacao,
	mediaAcertosErros
};
