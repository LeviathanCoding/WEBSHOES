'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Slider extends Model {}

  Slider.init({
    img: DataTypes.STRING(50),
    description : DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Slider',
    
    
  });

  return Slider;
};
