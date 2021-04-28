'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ReportProblems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roomNum: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phonNum: {
        type: Sequelize.INTEGER
      },
      theProblems: {
        type: Sequelize.STRING
      },
      Requre: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ReportProblems');
  }
};