const express = require("express");
const router = express.Router();

const pins = require("../routes/Pins");
const users = require("../routes/Users");

router.use("/pins", pins);
router.use("/users", users);

module.exports = router;
