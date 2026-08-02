require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;
if (!url) {
  throw new Error("Missing MONGODB_URI in .env");
}

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection("products").insertOne(newProduct);
    return res.status(201).json({
      message: "Data stored successfully.",
      productId: result.insertedId,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Couldn't store data.",
      error: error.message,
    });
  } finally {
    await client.close();
  }
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    const products = await db.collection("products").find().toArray();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: "Couldn't fetch products.",
      error: error.message,
    });
  } finally {
    await client.close();
  }
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
