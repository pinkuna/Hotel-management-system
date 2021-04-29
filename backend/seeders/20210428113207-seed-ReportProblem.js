'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    data.map(item => {   //colum ที่ทำให้รู้ว่าเข้ามาและออกไปเวลาไหนบ้าง
      item.created = new Date()
      item.updated = new Date()
    })

    await queryInterface.bulkInsert('ReportProblems', data, //[{   // เราจะ insreat เข้าไปที่ table ไหน // ใส่ data เข้าไปแทนค่าที่ comment
      //name: 'John Doe',  //ค่าที่จะใส่ใน table
      //isBetaMember: false  //ค่าที่จะใส่ใน table
      //}], 
      {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('ReportProblems', null, {});
  }
};

const data = [
  {
    "roomNum":100,
    "name":"apiwat",
    "phonNum":14,
    "theProblems":"I don't have money",
    "Requre":"ok",
    "title":"YYY"
  },
]
