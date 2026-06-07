const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const UserModel = require("./User");
const StoreModel = require("./Store");
const RatingModel = require("./Rating");

const User = UserModel(sequelize, DataTypes);
const Store = StoreModel(sequelize, DataTypes);
const Rating = RatingModel(sequelize, DataTypes);

// IMPORTANT: associations AFTER models init
User.hasOne(Store, { foreignKey: "ownerId" });
Store.belongsTo(User, { foreignKey: "ownerId" });

User.hasMany(Rating, { foreignKey: "userId" });
Rating.belongsTo(User, { foreignKey: "userId" });

Store.hasMany(Rating, { foreignKey: "storeId" });
Rating.belongsTo(Store, { foreignKey: "storeId" });

module.exports = { User, Store, Rating };