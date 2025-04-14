'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.belongsTo(models.ColorSize, { foreignKey: 'color_size_id' });
      OrderItem.belongsTo(models.Order, { foreignKey: 'order_id' });
      OrderItem.belongsTo(models.ShippingAddress, { foreignKey: 'address_id' });
    }
  }

  OrderItem.init({
    quantity: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    status: DataTypes.STRING,
    delivered_at: DataTypes.DATE,
    receiver: DataTypes.STRING(20),
    phone: DataTypes.STRING(20),
    province: DataTypes.STRING(20),
    district: DataTypes.STRING(20),
    commune: DataTypes.STRING(20),
    detail: DataTypes.STRING(200),
    color_size_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderItem',
    tableName: 'app_orderitem',
    timestamps: false
  });

  return OrderItem;
};
