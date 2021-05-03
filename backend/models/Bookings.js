'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bookings.init({
    roomNum: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phonNum: DataTypes.INTEGER,
    idcard: DataTypes.INTEGER,
    email: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bookings',
    createdAt: "created", // เพิ่มเข้ามา
    updatedAt: "updated",  //เพิ่มเข้ามา
  });
  return Bookings;
};