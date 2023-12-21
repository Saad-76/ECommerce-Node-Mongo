const { newCategoryService, getCatergoyService } = require("./categoryService");

const newCategory = async (req, res) => {
  const { name } = req.body;
  const category = await newCategoryService(name);
  res.status(category.status).send(category);
};

const getAllCategories = async (req, res) => {
  const getAll = await getCatergoyService();
  res.status(getAll.status).send(getAll);
};

module.exports = {
  newCategory,
  getAllCategories,
};
