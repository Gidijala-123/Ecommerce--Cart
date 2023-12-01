const express = require("express");
const app = express();
const cors = require("cors");
const products = require("./products");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Backend");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
