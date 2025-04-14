'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
      static associate(models) {
        Product.belongsTo(models.Category, { foreignKey: 'category_id' });
        Product.hasMany(models.Color, { foreignKey: 'product_id' });
        Product.hasMany(models.Size, { foreignKey: 'product_id' });
      }
    }
    Product.init({
      name: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'Product',
      timestamps: true,
    });
    return Product;
  };
  