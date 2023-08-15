const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: String,
  idCustomer: String,
  emailCustomer: String,
  addressCustomer: String,
  typeCompany: String,
  startTime: { type: Date },
  endTime: { type: Date },
  totalDays: Number ,
});


const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
