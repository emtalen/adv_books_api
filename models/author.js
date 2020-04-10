'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        } 
      },
      fullName: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.get("firstName")} ${this.get("lastName")}`;
        },
      },
    },
    {}
  );
  Author.associate = (models) => {
    Author.hasMany(models.Book, { as: 'books' })
  };
  return Author;
};