'use strict';
module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      descricao: DataTypes.STRING,
      status: DataTypes.STRING,
      pais: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      endereco: DataTypes.STRING,
      complemento: DataTypes.STRING,
      referencia: DataTypes.STRING,
      tipo: DataTypes.STRING,
      cep: DataTypes.STRING,
      usuarioId: DataTypes.INTEGER
    });
    Endereco.associate = function(models) {
       Endereco.hasMany(models.Usuario, {as: 'usuario'})
    };  
    return Endereco;
  }