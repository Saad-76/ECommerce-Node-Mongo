const Product = require("./productModel");

const newProductService = async (product) => {
  try {
    const name = product.name;

    const productExist = await Product.findOne({ name });

    if (productExist) {
      return { status: 401, message: "Product Already Exist" };
    }

    const newProduct = Product.create(product);
    if (newProduct) {
      return { status: 200, message: "Product Created Successfully" };
    }
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

const allProductsService = async (pageNumber) => {
  const pageSize = 10;
  const skip = (pageNumber - 1) * pageSize;

  try {
    const allProducts = await Product.find({})
      .skip(skip)
      .limit(pageSize)
      .sort({ name: 1 })
      .exec();

    if (allProducts) {
      return {
        status: 200,
        message: "Here is list of All Products",
        data: allProducts,
      };
    } else {
      return { status: 401, message: "No product found" };
    }
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

const productByIdService = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      return { status: 401, message: "No product found" };
    }

    return {
      status: 200,
      message: "Detail of current product is here",
      data: product,
    };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

const updateProductService = async (id, newProduct) => {
  try {
    const product = await Product.findById(id);

    if (!product) {
      return { status: 401, message: "Product Not Found" };
    }

    if (product) {
      product.name = newProduct.name !== "" ? newProduct.name : product.name;

      product.description =
        newProduct.description !== ""
          ? newProduct.description
          : product.description;
      product.image =
        newProduct.image !== "" ? newProduct.image : product.image;

      product.category_id =
        newProduct.category_id !== ""
          ? newProduct.category_id
          : product.category_id;

      product.brand =
        newProduct.brand !== "" ? newProduct.brand : product.brand;

      // product.rating =
      //   newProduct.rating !== "" ? newProduct.rating : product.rating;

      // product.numOfReviews =
      //   newProduct.numOfReviews !== ""
      //     ? newProduct.numOfReviews
      //     : product.numOfReviews;

      product.price =
        newProduct.price !== "" ? newProduct.price : product.price;

      product.countInStock =
        newProduct.countInStock !== ""
          ? newProduct.countInStock
          : product.countInStock;

      const updatedProduct = await product.save();

      const response = {
        id: updatedProduct.id,
        name: updatedProduct.name,
        description: updatedProduct.description,
        image: updatedProduct.image,
        category_id: updatedProduct.category_id,
        brand: updatedProduct.brand,
        // rating: updatedProduct.rating,
        // numOfReviews: updatedProduct.numOfReviews,
        price: updatedProduct.price,
        countInStock: updatedProduct.countInStock,
      };

      return {
        status: 200,
        message: "Product Updated Successfully",
        product: response,
      };
    }
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

module.exports = {
  newProductService,
  allProductsService,
  productByIdService,
  updateProductService,
};
