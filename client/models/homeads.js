'use strict';
module.exports = (sequelize, DataTypes) => {
  var HomeAds = sequelize.define('HomeAds', {
    nama: DataTypes.STRING,
    lokasi: DataTypes.TEXT,
    harga: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return HomeAds;
};