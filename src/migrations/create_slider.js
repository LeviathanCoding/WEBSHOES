'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Slider', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updateAt: {
        allowNull: false,
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
    await queryInterface.dropTable('Slider');
  }
};