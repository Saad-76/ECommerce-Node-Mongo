const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoutes = require("./src/user/userRoutes");
const productRoutes = require("./src/product/productRoutes");
const categoryRoutes = require("./src/category/categoryRoutes");
// const stripeRoutes = require("./src/paymentGateway/stripeRoutes");

const dotenv = require("dotenv");
const connectDb = require("./src/config/db");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

dotenv.config();
connectDb();

app.get("/", (req, res) => {
  res.send("You are listening to this server");
});

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
// app.use("/api", stripeRoutes);

app.listen(5001, () => {
  console.log("You are on port 5001");
});
