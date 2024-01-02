const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  category_id: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  // rating: {
  //   type: Number,
  //   required: true,
  //   default: 0,
  // },
  // numOfReviews: {
  //   type: Number,
  //   required: true,
  //   default: 0,
  // },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = Product = mongoose.model("Product", productSchema);
