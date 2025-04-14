'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total :{
        type : Sequelize.INTEGER,
        allowNull : false,
      },
        deliveryFee : {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'User',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      lastLogin : {
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
    await queryInterface.dropTable('Order');
  }
};