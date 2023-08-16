const Firm = require("../models/Firm.model");
module.exports.firmController = {
  getFirm: async (req, res) => {
    try {
      const firm = await Firm.find({});
      res.json(firm);
    } catch (error) {
      res.json(error);
    }
  },

  postFirm: async (req, res) => {
    const { name } = req.body;
    try {
      const firm = await Firm.create({
        name
      });
      res.json(firm);
    } catch (error) {
      res.json(error);
    }
  },

  patchFirm: async (req, res) => {
    try {
      const firm = await Firm.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json(firm);
    } catch (error) {
      res.json(error);
    }
  },

  deleteFirm: async (req, res) => {
    try {
      await Firm.findByIdAndRemove(req.params.id);
      res.json("Firm deletetd");
    } catch (error) {
      res.json(error);
    }
  }
};

