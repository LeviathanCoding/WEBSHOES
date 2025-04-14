'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    //Table User
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName : {
        type : Sequelize.STRING,
        
        
      },
      passWord: {
        
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      phoneNumber : {
        type: Sequelize.STRING
      },
      birth:{
        type : Sequelize.DATE,
        allowNull : true
      },
      gender: {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },

      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      lastLogin : {
        allowNull : true,
        type: Sequelize.DATE
      }
      
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    }
  );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User');
  }


};

