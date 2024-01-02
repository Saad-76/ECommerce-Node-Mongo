const express = require("express");
const {
  addFavouriteController,
  getAllFavourites,
} = require("./favouriteController");

const router = express.Router();

router.post("/create", addFavouriteController);
router.post("/favourites", getAllFavourites);

module.exports = router;
