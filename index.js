const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const calls = require("./handlers/urlHandle");
const port = process.env.PORT || 3000;
const app = express();

// all the using tools
app.use(cors());
dotenv.config();

app.use(express.json());

//All the routes

app.use("/calls", calls);
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Internal server error" });
});
//Connect to db
mongoose
  .connect(process.env.CONNECTION_TO_MONGOOSE)
  .then(() => {
    app.listen(port, () => {
      console.log("YOUR SERVER IS RUNNING");
    });
  })
  .catch((error) => {
    console.log(error);
  });
