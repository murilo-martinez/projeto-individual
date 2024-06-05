var express = require("express");
var router = express.Router();

var contatoController = require("../controllers/contatoController");

router.post("/salvar-contato", function (req, res) {
    contatoController.salvarContato(req, res);
});

module.exports = router;