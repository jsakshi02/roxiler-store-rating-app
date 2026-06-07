module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING(60),
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    address: DataTypes.STRING(400),
    role: {
      type: DataTypes.ENUM("ADMIN", "USER", "STORE_OWNER"),
      defaultValue: "USER"
    }
  });

  return User;
};