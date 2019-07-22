const express = require("express");

const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//Import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//Home Route
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB!")
);

//How to  to a server
app.listen(3000);
