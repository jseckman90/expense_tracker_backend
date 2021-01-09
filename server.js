const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const transactions = require("./routes/transactions");

dotenv.config({ path: "./config/config.env" });
connectDB();

PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.use("/api/v1/transactions", transactions);

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
