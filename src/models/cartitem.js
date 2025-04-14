'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      CartItem.belongsTo(models.User, { foreignKey: 'user_id' });
      CartItem.belongsTo(models.ColorSize, { foreignKey: 'color_size_id' });
    }
  }

  CartItem.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    user_id: DataTypes.INTEGER,
    color_size_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartItem',
    tableName: 'app_cartitem',
    timestamps: false
  });

  return CartItem;
};
