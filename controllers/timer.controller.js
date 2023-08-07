const Timer = require("../models/Timer.model")

module.exports.timerController = {
  createTimer: async (req, res) => {
    try {
      const newTimer = new Timer({ startTime: new Date() });
      await newTimer.save();
      res.json({ message: 'Timer started.', timer: newTimer });
    } catch (error) {
      res.status(400).json({ error: 'Failed to start the timer.' });
    }
  },
  stopTimer: async(req,res) => {
    try {
        const timer = await Timer.findOne({ endTime: null });
        if (!timer) {
          return res.status(400).json({ message: 'Timer not started.' });
        }
        timer.endTime = new Date();
        await timer.save();
        res.json({ message: 'Timer stopped.', timer });
    } catch (error) {
        res.status(404).json({ message: 'Timer not started.' });
    }
  }
}
