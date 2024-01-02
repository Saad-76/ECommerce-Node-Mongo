const mongoose = require("mongoose");

const favouriteSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  isAdded: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = Favourite = mongoose.model("Favourite", favouriteSchema);
