const Project = require("../models/Project.model");

const calculateTotalDays = (startTime, endTime) => {
  const diffInTime = new Date(endTime) - new Date(startTime);
  console.log(diffInTime)
  return diffInTime / (1000 * 3600 * 24);
};
module.exports.projectsController = {
  createProjects: async (req, res) => {

    const {name,idCustomer,emailCustomer,addressCustomer,typeCompany,startTime,endTime} = req.body
    const totalDays = await calculateTotalDays(startTime, endTime)
    console.log(totalDays)

    try {
      const data = await Project.create({
        name,
        idCustomer,
        emailCustomer,
        addressCustomer,
        typeCompany,
        startTime,
        endTime,
        totalDays
        

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
