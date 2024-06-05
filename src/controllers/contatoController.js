var contatoModel = require("../models/contatoModel");

function salvarContato(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var mensagem = req.body.mensagemServer;

    if (nome == undefined || email == undefined || mensagem == undefined) {
        res.status(400).send("Preencha todos os campos!");
    } else {
        contatoModel
            .salvarContatoo(nome, email, mensagem)
            .then(function (resultado) {
                res.status(200).end(); // Envie uma resposta 200 OK
            })
            .catch(function (erro) {
                console.error('Erro ao salvar o contato', erro);
                res.status(500).end(); // Envie uma resposta 500 Internal Server Error em caso de erro
            });
    }
}



module.exports = {
	salvarContato,
};