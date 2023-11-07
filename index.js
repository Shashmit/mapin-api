const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const calls = require("./handlers/urlHandle");

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
//Connect to db
mongoose
  .connect(process.env.CONNECTION_TO_MONGOOSE)
  .then(() => {
    app.listen(process.env.PORT_NUMBER || 4000, "0.0.0.0", () => {
      console.log("YOUR SERVER IS RUNNING");
    });
  })
  .catch((error) => {
    console.log(error);
  });
