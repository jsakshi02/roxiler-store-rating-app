module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define("Rating", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    rating: { type: DataTypes.INTEGER, allowNull: false }
  });

  return Rating;
};