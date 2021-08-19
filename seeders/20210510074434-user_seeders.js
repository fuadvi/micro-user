'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name:"fuad",
        profession: "back end developer",
        role:"admin",
        email: "fuad.pcd@gmail.com",
        password: await bcrypt.hash('fuad12345678',10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name:"jihan",
        profession: "designer",
        role:"student",
        email: "jihan@gmail.com",
        password: await bcrypt.hash('fuad12345678',10),
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
