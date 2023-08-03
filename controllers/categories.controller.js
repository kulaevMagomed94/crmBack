const Category = require("../models/Category.model");

module.exports.categoriesController = {
  createCategories: async (req, res) => {
    try {
      const data = await Category.create({
        name: req.body.name,
      });
      res.json(data);
    } catch (error) {
      res.status(401).json(error.message);
    }
  },
  getOneCategories: async (req, res) => {
    try {
      const data = await Category.findById(req.params.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getCategories: async (req, res) => {
    try {
      const data = await Category.find();
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteCategories: async (req, res) => {
    try {
      const data = await Category.findByIdAndDelete(req.params.id, {
        new: true,
      });
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
