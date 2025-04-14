'use strict';





module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cartitem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        quantity :{
            type : Sequelize.INTEGER,
            allowNull : false,
        },
        price : {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        total:{
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
        color_size_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Color_size',
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cartitem');
  }
};