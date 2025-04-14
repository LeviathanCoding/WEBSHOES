'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orderitem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      delivered_at:{
        type: Sequelize.DATE,
        allowNull: true,
      },
      receiver:{
        type: Sequelize.STRING,
        allowNull: false,
      },
        phoneNumber:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        province:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        district:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        commune:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        detail:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        color_size_id:{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Color_size',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        order_id:{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Order',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        address_id:{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'shippingAddress',
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
    await queryInterface.dropTable('Orderitem');
  }
};