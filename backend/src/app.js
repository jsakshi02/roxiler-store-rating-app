const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const ownerRoutes = require("./routes/ownerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// DEBUG (VERY IMPORTANT)
console.log({
  authRoutes,
  adminRoutes,
  userRoutes,
  ownerRoutes
});

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/owner", ownerRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Roxiler Store Rating API Running" });
});


console.log("adminRoutes type:", typeof adminRoutes);
console.log("userRoutes type:", typeof userRoutes);
console.log("ownerRoutes type:", typeof ownerRoutes);

module.exports = app;