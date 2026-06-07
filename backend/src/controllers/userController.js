const { Store, Rating } = require("../models");

// GET ALL STORES
exports.getStores = async (req, res) => {
  const stores = await Store.findAll({ include: Rating });
  res.json(stores);
};

// SUBMIT RATING
exports.submitRating = async (req, res) => {
  const { storeId, rating } = req.body;
  const userId = req.user.id;

  const existing = await Rating.findOne({
    where: { storeId, userId }
  });

  if (existing) {
    existing.rating = rating;
    await existing.save();
    return res.json({ message: "Rating updated" });
  }

  await Rating.create({ storeId, userId, rating });

  res.json({ message: "Rating submitted" });
};