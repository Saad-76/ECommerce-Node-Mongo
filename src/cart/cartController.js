const { addToCartService } = require("./cartService");

const addToCart = async (req, res) => {
  const { name } = req.body;

  const cart = {
    name,
  };

  const response = await addToCartService(cart);
  res.status(response.status).send(response);
};

module.exports = {
  addToCart,
};
