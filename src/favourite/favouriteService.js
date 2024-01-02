const Favourite = require("./favouriteModel");

const addToFavouriteService = async (favourite) => {
  try {
    const response = await Favourite.create(favourite);
    return { code: 200, status: "Item added", response };
  } catch (error) {
    return { code: 500, status: "Internal Server Error" };
  }
};

const getAllFavouritesService = async () => {
  try {
    const response = await Favourite.find({});
    return { code: 200, status: "List of all favourite Items", response };
  } catch (error) {
    return { code: 500, status: "Internal Server Error" };
  }
};

module.exports = { addToFavouriteService, getAllFavouritesService };
