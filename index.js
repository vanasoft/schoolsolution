const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome here !!!");
});

app.listen(3000, () => console.log("Listening on port " + 3000));
