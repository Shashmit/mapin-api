const { configDotenv } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const pinRoute = require("../api/routes/Pin");
const user = require("../api/routes/Users");
const app = express();

// all the using tools
app.use(cors());
configDotenv();

app.use(express.json());

//All the routes

app.use("/api/pins", pinRoute);
app.use("/api/users", user);

//Connect to db
mongoose
  .connect(process.env.CONNECTION_TO_MONGOOSE)
  .then(() => {
    app.listen(process.env.PORT_NUMBER || 4000, () => {
      console.log("YOUR SERVER IS RUNNING");
    });
  })
  .catch((error) => {
    console.log(error);
  });
