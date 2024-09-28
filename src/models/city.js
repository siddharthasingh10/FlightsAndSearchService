'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      // define association here if needed

      this.hasMany(models.Airport,{
        foreignKey:'cityId'
      })
    }
  }

  City.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Set options for the field here
      unique: true      // Set options for the field here
    }
  }, {
    sequelize,
    modelName: 'City',
  });

  return City;
};
  