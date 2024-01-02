const {
  addToFavouriteService,
  getAllFavouritesService,
} = require("./favouriteService");

const addFavouriteController = async (req, res) => {
  const { userId, productId, isAdded } = req.body;
  const favourite = {
    userId,
    productId,
    isAdded,
  };
  const response = await addToFavouriteService(favourite);
  res.status(response.status).send(response);
};

const getAllFavourites = async (req, res) => {
  const response = await getAllFavouritesService();
  res.status(response.status).send(response);
};

module.exports = {
  addFavouriteController,
  getAllFavourites
};
