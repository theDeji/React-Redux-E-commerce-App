const mongoose = require("mongoose");

const UserShema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", UserShema);

module.exports = Users;
