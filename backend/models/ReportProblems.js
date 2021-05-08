'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReportProblems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ReportProblems.init({
    roomNum: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phonNum: DataTypes.INTEGER,
    theProblems: DataTypes.STRING,
    Requre: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ReportProblems',
    //underscored: true,
    createdAt: "created", // เพิ่มเข้ามา
    updatedAt: "updated",  //เพิ่มเข้ามา
  });
  return ReportProblems;
};