const Team = require("../models/Team.model");

module.exports.teamControllers = {
  getAllTeams: async (req, res) => {
    const team = await Team.find();
    res.json(team);
  },

  getOneTeam: async (req, res) => {
    try {
      const teamId = req.params.id;

      const doc = await Team.findById({
        _id: teamId,
      });

      if (!doc) {
        return res.status(404).json({
          message: "Команда не найдена",
        });
      }
      res.json(doc);
    } catch (error) {
      return res.status(401).json({ error: "ошибка поиска" + error.message });
    }
  },

  deleteTeam: async (req, res) => {
    const { id } = req.params;

    try {
      const team = await Team.findByIdAndDelete(id);

      return res.json("удолено " + team);
    } catch (error) {
      return res.status(401).json({ error: "ошибка" + error.message });
    }
  },
  createTeam: async (req, res) => {
    const { text } = req.body;

    try {
      const team = await Team.create({
        text,
      });
      return res.json(team);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },

  changeTeam: async (req, res) => {
    const { id } = req.params;

    const { text } = req.body;

    try {
      const team = await Team.findByIdAndUpdate(id, {
        text,
      });
      return res.json(team);
    } catch (error) {
      return res.status(401).json(error.message + " ощибка изменения");
    }
  },
};
