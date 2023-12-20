const express = require("express");
const {
  newProduct,
  allProducts,
  productById,
  updateProduct,
} = require("./productController");

const router = express.Router();

router.post("/new", newProduct);
router.get("/products", allProducts);
router.get("/product", productById);
router.put("/product", updateProduct);

module.exports = router;
