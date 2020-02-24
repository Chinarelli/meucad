const express = require('express');
const router = express.Router();
const {Endereco} = require('../models');

router.post('/', async (req, res) => { // Criar
   await Endereco.create(req.body);
   res.send('Endereço Cadastrado Com Sucesso!');
});

router.get('/', async (req, res) => {  //Listar todos
   const enderecosListAll = await Endereco.findAll();
   res.send(enderecosListAll); 
}); 

module.exports = router;