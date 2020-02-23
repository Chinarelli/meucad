const express = require('express');
const router = express.Router();
const endereco = require('../app/models/enderecos');

router.post('/', async (req, res) => { // Criar
	await endereco.create(req.body);
	res.json('Endereço Cadastrado Com Sucesso!');
});

router.get('/', async (req, res) => {  //Listar todos
	const enderecosListAll = await endereco.findAll(req.body);
	res.json(enderecosListAll); 
}); 

module.exports = router;