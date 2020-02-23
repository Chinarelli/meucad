const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const models = require('./app/models/');
const Usuario = models.Usuario;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/usuarios', (req, res) => {  //Listar todos

}); 

app.post('/usuarios', async (req, res) => { // Criar
  const usuario = await Usuario.create(req.body);
  res.json('Cliente Cadastrado Com Sucesso');
});

app.get('/usuarios/:id', (req, res) => { //Buscar

}); 

app.put('/usuarios/:id', (req, res) => { //Editar

}); 

app.delete('/usuarios/:id', async (req, res) => { //Deletar
  const usuario = await Usuario.delete(req.body);
  res.json('Cliente Deletado Com Sucesso');
}); 

app.listen(3000);