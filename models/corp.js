'use strict';
module.exports = function(sequelize, DataTypes) {
  var Corp = sequelize.define("Corp", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    corp_name: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    results: {
      type: DataTypes.STRING
    },
    last_logon: {
      type: DataTypes.DATE
    }
  });

  Corp.associate = function(models) {
    Corp.hasMany(models.User, {
      onDelete: "cascade"
    });
  };

  return Corp;
};
