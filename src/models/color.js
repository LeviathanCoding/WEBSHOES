'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    static associate(models) {
      Color.belongsTo(models.Product, { foreignKey: 'product_id' });
      Color.hasMany(models.ColorSize, { foreignKey: 'color_id' });
    }
  }
  Color.init({
    color: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
