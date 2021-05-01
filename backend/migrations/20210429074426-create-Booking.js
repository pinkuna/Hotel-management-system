'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
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
      idcard: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bookings');
  }
};