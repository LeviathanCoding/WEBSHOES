'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Order, { foreignKey: 'user_id' });
      User.hasMany(models.ShippingAddress, { foreignKey: 'user_id' });
    }
  }
  User.init({
    userName: { type: DataTypes.STRING, allowNull: false, unique: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING, allowNull: false },
    birth: { type: DataTypes.DATE, allowNull: true },
    gender: { type: DataTypes.BOOLEAN, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    passWord: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'User',
    timestamps: false, 
  });
  return User;
};