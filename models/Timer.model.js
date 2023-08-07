const mongoose = require("mongoose");

const timerSchema = mongoose.Schema({
  startTime:{type:Date},
  endTime:{type:Date}
});

const Timer = mongoose.model("Timer", timerSchema);

module.exports = Timer;


