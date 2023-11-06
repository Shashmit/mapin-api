const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, min: 3, max: 20, unique: true },
    password: { type: String, required: true, max: 50, min: 6, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
