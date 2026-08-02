require("dotenv").config();
const mongoose = require("mongoose");

const Product = require("./models/product");

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("Missing MONGODB_URI in .env");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();
  console.log(typeof createdProduct._id); // id to string
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
