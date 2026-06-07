const { Store, Rating, User } = require("../models");

// GET STORE DASHBOARD
exports.getDashboard = async (req, res) => {
  const store = await Store.findOne({
    where: { ownerId: req.user.id },
    include: [{ model: Rating, include: [User] }]
  });

  const ratings = store.Ratings || [];

  const avg =
    ratings.reduce((a, b) => a + b.rating, 0) / (ratings.length || 1);

  res.json({
    store,
    averageRating: avg.toFixed(1),
    usersWhoRated: ratings
  });
};