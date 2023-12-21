const express = require("express");
const { newCategory, getAllCategories } = require("./categoryController");

const router = express.Router();

router.post("/category", newCategory);
router.get("/categories", getAllCategories);

module.exports = router;
