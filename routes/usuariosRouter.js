const express = require('express');
const router = express.Router();
const {Usuario} = require('../app/models');

router.post('/', async (req, res) => { // Criar
  await Usuario.create(req.body);
  res.json('Usuario Cadastrado Com Sucesso!');
});

router.get('/', async (req, res) => {  //Listar todos
	const usuariosListAll = await Usuario.findAll(req.body);
	res.json(usuariosListAll); 
});

/*
app.get('/usuarios/:id', (req, res) => { //Buscar

}); 

app.put('/usuarios/:id', (req, res) => { //Editar

}); 

app.delete('/usuarios/:id', async (req, res) => { //Deletar
  const usuario = await Usuario.delete(req.body);
  res.json('Cliente Deletado Com Sucesso');
}); */

module.exports = router;