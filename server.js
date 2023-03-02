const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS
});

console.log("Testing env", process.env);

client
  .connect()
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error");
    console.error(err);
  })
  .finally(() => {
    console.log("finally");
  });

const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.listen(PORT, () => {
  console.log("listening");
});
