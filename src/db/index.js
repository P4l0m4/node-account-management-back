const express = require("express");
const app = express();
require("./db/mongoose");
const User = require("./models/user");
const port = process.env.PORT || 3000;

app.post("/users", (req, res) => {
  res.send("testing");
});

app.listen(port, () => {
  console.log("Server is up");
});
