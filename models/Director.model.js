const mongoose = require("mongoose");

const DirectorShema = mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const Director = mongoose.model("Director", DirectorShema);
module.exports = Director;