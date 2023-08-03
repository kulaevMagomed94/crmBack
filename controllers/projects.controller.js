const Project = require("../models/Project.model");

module.exports.projectsController = {
  createProjects: async (req, res) => {
    const {name,idCustomer,emailCustomer,addressCustomer,typeCompany,startTime,finishedTime} = req.body
    try {
      const data = await Project.create({
        name,
        idCustomer,
        emailCustomer,
        addressCustomer,
        typeCompany,
        startTime,
        finishedTime
      });
      res.json(data);
    } catch (error) {
      res.status(401).json(error.message);
    }
  },
  getOneProjects: async (req, res) => {
    try {
      const data = await Project.findById(req.params.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getProjects: async (req, res) => {
    try {
      const data = await Project.find();
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteProjects: async (req, res) => {
    try {
      const data = await Project.findByIdAndDelete(req.params.id, {
        new: true,
      });
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
