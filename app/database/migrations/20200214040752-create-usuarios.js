'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      sobrenome: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING(160),
      },
      celular: {
        allowNull: false,
        type: Sequelize.STRING(16),
      },
      dtnascimento: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      sexo: {
        allowNull: false,
        type: Sequelize.STRING(1),
      },     
      rg: {
        allowNull: false,
        type: Sequelize.STRING(14),
      }, 
      dtemissao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      orgaoemissor: {
        allowNull: false,
        type: Sequelize.STRING(160),
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING(11),
      },         
      estadocivil: {
        allowNull: false,
        type: Sequelize.STRING(1),
      }, 
      profissao: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      empresa: {
        allowNull: false,
        type: Sequelize.STRING(255),
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
    return queryInterface.dropTable('Usuarios');
  }
};
