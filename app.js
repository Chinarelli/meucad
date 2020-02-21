const express = require('express');


const app = express();
const models = require('./app/models/');
const Usuario = models.Usuario;

Usuario.create({ nome: 'Lucas', sobrenome: 'Chinarelli', email: 'lucas@humobu.com.br', senha: '123456',
                 celular: '0101010101', dtnascimento: '2020-02-21', sexo: 'M',
                 rg: '91919191', dtemissao: '2020-02-21', orgaoemissor: 'SSP', cpf: '1173737373',
                 estadocivil: 'S', profissao: 'Desenvolvedore de Software', empresa: 'Sponte' }); 

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);