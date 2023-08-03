const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name:{
    type: String,
    require: true
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;