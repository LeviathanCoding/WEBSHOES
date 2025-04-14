'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shippingAddress', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      receiver :{
        type : Sequelize.STRING,
        allowNull : false,
      },
        phoneNumber : {
            type: Sequelize.STRING,
            allowNull: false,
        },
        id_province: {
            type: Sequelize.INTEGER,
            aloowNull: false,
        },
        id_commune :{
            type: Sequelize.INTEGER,
            allowNull: false,

        },
        id_district : {
            type: Sequelize.INTEGER,
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
        df :{
            type: Sequelize.STRING,
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
    await queryInterface.dropTable('shippingAddress');
  }
};