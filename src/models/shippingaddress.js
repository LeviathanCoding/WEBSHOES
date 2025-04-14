'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShippingAddress extends Model {
    static associate(models) {
      ShippingAddress.belongsTo(models.User, { foreignKey: 'user_id' });
      ShippingAddress.hasMany(models.OrderItem, { foreignKey: 'address_id' });
    }
  }

  ShippingAddress.init({
    receiver: DataTypes.STRING(20),
    phone: DataTypes.STRING(20),
    id_province: DataTypes.STRING(20),
    id_commune: DataTypes.STRING(20),
    id_district: DataTypes.STRING(20),
    province: DataTypes.STRING(20),
    district: DataTypes.STRING(20),
    commune: DataTypes.STRING(20),
    detail: DataTypes.STRING(200),
    df: DataTypes.INTEGER,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShippingAddress',
   
    timestamps: false
  });

  return ShippingAddress;
};
