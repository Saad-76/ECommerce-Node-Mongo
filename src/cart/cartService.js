const Cart = require("./cartModel");

const addToCartService = async (cart) => {
  try {
    console.log(cart, "cart is her");

    // const
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

module.exports = {
  addToCartService,
};
