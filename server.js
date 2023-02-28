const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.listen(PORT, () => {
  console.log(`App is up and listening on port ${PORT}`);
});
