const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  employeesTeam:[]
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;