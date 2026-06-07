const { User, Store, Rating } = require("../models");
const bcrypt = require("bcryptjs");

// ADD USER (ADMIN ONLY)
exports.addUser = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      role
    });

    res.json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD STORE
exports.addStore = async (req, res) => {
  try {
    const { name, email, address, ownerId } = req.body;

    const store = await Store.create({
      name,
      email,
      address,
      ownerId
    });

    res.json({ message: "Store created", store });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DASHBOARD STATS
exports.getDashboard = async (req, res) => {
  try {
    const users = await User.count();
    const stores = await Store.count();
    const ratings = await Rating.count();

    res.json({
      totalUsers: users,
      totalStores: stores,
      totalRatings: ratings
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LIST USERS
exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

// LIST STORES WITH AVERAGE RATING
exports.getStores = async (req, res) => {
  const stores = await Store.findAll({
    include: [{ model: Rating }]
  });

  const result = stores.map(store => {
    const ratings = store.Ratings || [];
    const avg =
      ratings.reduce((a, b) => a + b.rating, 0) / (ratings.length || 1);

    return {
      id: store.id,
      name: store.name,
      email: store.email,
      address: store.address,
      averageRating: avg.toFixed(1)
    };
  });

  res.json(result);
};