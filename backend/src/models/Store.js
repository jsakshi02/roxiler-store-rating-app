module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define("Store", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING(400)
  });

  return Store;
};