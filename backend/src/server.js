require("dotenv").config();

const app = require("./app");
const { sequelize, connectDB } = require("./config/db");
require("./models");

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();

    await sequelize.sync({ alter: true });

    console.log("Tables synced");

    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });
  } catch (err) {
    console.log(err);
  }
})();