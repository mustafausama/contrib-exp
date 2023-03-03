const router = require("./routes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const main = async () => {
  const app = express();

  const PORT = process.env.PORT || 4000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.use("/", router);

  app.get("/", (req, res) => {
    res.send("Hello!!");
  });

  app.listen(PORT, () => {
    console.log("listening");
  });
};

main();
