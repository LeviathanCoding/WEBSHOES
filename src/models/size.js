'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    static associate(models) {
      Size.belongsTo(models.Product, { foreignKey: 'product_id' });
      Size.hasMany(models.ColorSize, { foreignKey: 'size_id' });
    }
  }

  Size.init({
    size: DataTypes.STRING(5),
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Size',
    
    
  });

  return Size;
};
