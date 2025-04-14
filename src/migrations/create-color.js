'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Color', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      img:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Product',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updateAt : {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Color');
  }
};