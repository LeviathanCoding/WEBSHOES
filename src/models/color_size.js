'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ColorSize extends Model {
    static associate(models) {
      ColorSize.belongsTo(models.Color, { foreignKey: 'color_id' });
      ColorSize.belongsTo(models.Size, { foreignKey: 'size_id' });
      ColorSize.hasMany(models.OrderItem, { foreignKey: 'color_size_id' });
    }
  }
  ColorSize.init({
    stock: DataTypes.INTEGER,
    sold: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ColorSize',
  });
  return ColorSize;
};
