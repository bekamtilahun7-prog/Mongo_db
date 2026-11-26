hi# Mongo Bootcamp Project

This is a simple beginner project that shows how to connect a Node.js app to MongoDB and store/retrieve data.

## What this project does

It creates a small Express API for products. You can:

- add a product using `POST /products`
- view all products using `GET /products`

The project uses:

- Node.js
- Express
- MongoDB
- Mongoose

## Project files

- `app.js` - starts the server
- `mongoose.js` - connects to MongoDB and handles product operations
- `models/product.js` - defines the product data structure
- `mongo.js` - shows how to use the native MongoDB driver

## How to run

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open your browser or use Postman to test:

- `http://localhost:3000/products`

## Example request

Create a product:

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","price":999.99}'
```

## Note

This project is meant for learning. The MongoDB connection string is currently written directly in the code, so it is better to move it to an environment variable in a real project.

## License

ISC
