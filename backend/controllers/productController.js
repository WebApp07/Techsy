import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    Fetch all products
//@route   GET /api/products
//@access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Create a  product
//@route   POST /api/products
//@access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Product test",
    price: 100,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "test brand",
    category: "test category",
    countInStock: 0,
    numReviews: 0,
    description: "test description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Fetch a product
//@route   GET /api/products/:id
//@access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductById, createProduct };
