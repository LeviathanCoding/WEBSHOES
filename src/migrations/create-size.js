'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Size', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        size :{
            type : Sequelize.STRING,
            allowNull : false,
        },
        product_id:{
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
      updateAtupdateAt : {
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
    await queryInterface.dropTable('Size');
  }
};