'use strict';




module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product', {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name :{
        type : Sequelize.STRING,
        allowNull : false,
      },
      description : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
        sold: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Category',
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
  down: async (queryInterface) => {
    await queryInterface.dropTable('Product');
  }
};