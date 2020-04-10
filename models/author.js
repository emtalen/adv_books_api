'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.get('firstName')} ${this.get('lastName')}`
      }
    }
  }, {});
  Author.associate = (models) => {
    // associations can be defined here
  };
  return Author;
};