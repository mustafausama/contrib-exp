const router = require("./routes");
const express = require("express");
const cors = require("cors");
require("express-async-errors");

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

  app.use((err, _req, res) => {
    console.log("== Error:", err);

    res.status(500).send({
      msg: "Internal server Error"
    });
  });

  app.listen(PORT, () => {
    console.log("listening");
  });
};

main();
