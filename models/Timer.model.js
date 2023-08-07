const mongoose = require("mongoose");

const timerSchema = mongoose.Schema({
  startTime:{type:Date},
  endTime:{type:Date},
  totalDays: { type: Number, default: 0 },
});

const Timer = mongoose.model("Timer", timerSchema);

module.exports = Timer;


