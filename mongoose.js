const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb+srv://Mongo:Mongo123123@mochila.d5bpvgd.mongodb.net/")
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
