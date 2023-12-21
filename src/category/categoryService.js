const Category = require("./categoryModel");

const newCategoryService = async (name) => {
  try {
    const category = await Category.findOne({ name });

    if (category) {
      return { status: 401, message: "Category Already Exists" };
    }
    const newCategory = await Category.create({ name });

    if (newCategory) {
      return {
        status: 200,
        message: "Category Added Successfully",
        category: newCategory,
      };
    }
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

const getCatergoyService = async () => {
  try {
    const all = await Category.find({});
    if (!all) {
      return { status: 401, messgae: "Category Not Found" };
    }
    return { status: 200, message: "List of all Categories", categories: all };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

module.exports = {
  newCategoryService,
  getCatergoyService,
};
