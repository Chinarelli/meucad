'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(1),
      },
      pais: {
        allowNull: false,
        type: Sequelize.STRING(60),
      },
      cidade: {
        allowNull: false,
        type: Sequelize.STRING(60),
      },
      estado: {
        allowNull: false,
        type: Sequelize.STRING(2),
      },
      endereco: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      complemento: {
        allowNull: true,
        type: Sequelize.STRING(160),
      },
      referencia: {
        allowNull: true,
        type: Sequelize.STRING(160),
      },
      tipo: {
        allowNull: true,
        type: Sequelize.STRING(160),
      },
      cep: {
        allowNull: true,
        type: Sequelize.STRING(16),
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'Usuarios',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enderecos');
  }
};
