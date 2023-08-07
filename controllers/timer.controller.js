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

  stopTimer: async (req, res) => {
    try {
      const timer = await Timer.findOne({ endTime: null });
      if (!timer) {
        return res.status(400).json({ message: 'Timer not started.' });
      }

      timer.endTime = new Date();

      // Рассчитываем разницу времени между startTime и endTime в миллисекундах
      const timeDifference = timer.endTime - timer.startTime;

      // Преобразуем миллисекунды в дни
      const totalDays = timeDifference / (1000 * 60 * 60 * 24);

      // Округляем значение до двух десятичных знаков
      timer.totalDays = totalDays.toFixed(2);

      await timer.save();
      res.json({ message: 'Timer stopped.', timer });
    } catch (error) {
      res.status(404).json({ message: 'Timer not started.' });
    }
  },

}
