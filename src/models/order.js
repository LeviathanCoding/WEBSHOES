'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'user_id' });
      Order.hasMany(models.OrderItem, { foreignKey: 'order_id' });
    }
  }
  Order.init({
    total: DataTypes.INTEGER,
    deliveryFee: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
