'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      celular: DataTypes.STRING,
      dtnascimento: DataTypes.DATE,
      sexo: DataTypes.STRING,
      rg: DataTypes.STRING,
      dtemissao: DataTypes.DATE,
      orgaoemissor: DataTypes.STRING,
      cpf: DataTypes.STRING,
      estadocivil: DataTypes.STRING,
      profissao: DataTypes.STRING,
      empresa: DataTypes.STRING
    });
    /* Usuario.associate = function(models) {
      Usuario.hasMany(models.Endereco, {as: 'endereco'})
    }; */
  
    return Usuario;
  }