const express = require('express');
const router = express.Router();
const {Usuario} = require('../models');

router.post('/', async (req, res) => { // Criar
   await Usuario.create(req.body);
   res.send('Usuario Cadastrado Com Sucesso!');
});

router.get('/', async (req, res) => {  //Listar todos
	 const usuariosListAll = await Usuario.findAll(req.body);
	 res.send(usuariosListAll); 
});


router.get('/:id', async (req, res) => { //Buscar
  const {id} = req.params;

  const usuariosListOne = await Usuario.findOne({
    where: {
      id,
    }
  });

  if (!id) {
    res.status(422);
    res.send({});
  } else if (!usuariosListOne) {
    res.status(404);
    res.send({});
  } else {
    res.status(200);
    res.send(usuariosListOne);    
  } 

}); 

/*app.put('/usuarios/:id', (req, res) => { //Editar

}); 

app.delete('/usuarios/:id', async (req, res) => { //Deletar
  const usuario = await Usuario.delete(req.body);
  res.json('Cliente Deletado Com Sucesso');
}); */

module.exports = router;