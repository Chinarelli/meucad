'use strict';
module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
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
    }, {});
    Endereco.associate = function(models) {
      Endereco.belongsTo(models.Usuario, {foreignKey: 'usuarioId', as: 'usuario'})
    };  
    return Endereco;
  }