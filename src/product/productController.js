const {
  newProductService,
  allProductsService,
  productByIdService,
  updateProductService,
} = require("./productService");

const newProduct = async (req, res) => {
  const {
    name,
    description,
    image,
    category_id,
    brand,
    // rating,
    // numOfReviews,
    price,
    countInStock,
  } = req.body;

  const product = {
    name: name,
    description: description,
    image: image,
    category_id: category_id,
    brand: brand,
    // rating: rating,
    // numOfReviews: numOfReviews,
    price: price,
    countInStock: countInStock,
  };

  const newProduct = await newProductService(product);

  res.status(newProduct.status).send(newProduct);
};

const allProducts = async (req, res) => {
  const pageNumber = req.query.pageNumber || 1;
  const allProducts = await allProductsService(pageNumber);
  res.status(allProducts.status).send(allProducts);
};

const productById = async (req, res) => {
  const id = req.query.id;
  const product = await productByIdService(id);
  res.status(product.status).send(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params.id;
  const {
    name,
    description,
    image,
    category_id,
    brand,
    // rating,
    // numOfReviews,
    price,
    countInStock,
  } = req.body;

  const product = {
    name,
    description,
    image,
    category_id,
    brand,
    // rating,
    // numOfReviews,
    price,
    countInStock,
  };

  const newProduct = await updateProductService(id, product);

  res.status(newProduct.status).send(newProduct);
};

module.exports = {
  newProduct,
  allProducts,
  productById,
  updateProduct,
};
