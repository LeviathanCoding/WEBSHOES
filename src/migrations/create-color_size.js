'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Color_size', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stock:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sold :{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      color_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Color',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
        size_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
            model: 'Size',
            key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },

      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updateAtAt : {
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
    await queryInterface.dropTable('Color_size');
  }
};