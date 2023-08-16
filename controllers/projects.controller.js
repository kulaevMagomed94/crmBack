const Project = require("../models/Project.model");

const calculateTotalDays = (startTime, endTime) => {
  const startDateParts = startTime.split(".");
  const endDateParts = endTime.split(".");

  const formattedStartDate = `${startDateParts[2]}-${startDateParts[1]}-${startDateParts[0]}`;
  const formattedEndDate = `${endDateParts[2]}-${endDateParts[1]}-${endDateParts[0]}`;

  const startDate = new Date(formattedStartDate);
  const endDate = new Date(formattedEndDate);

  const diffInTime = endDate - startDate;
  console.log(diffInTime);

  return diffInTime / (1000 * 3600 * 24);
};



module.exports.projectsController = {
  createProjects: async (req, res) => {

    const {name,idCustomer,emailCustomer,addressCustomer,typeCompany,startTime,endTime, projectManager} = req.body
    const totalDays =  calculateTotalDays(startTime.substr(0,10), endTime.substr(0,10))
    console.log(startTime.substr(0,10), endTime.substr(0,10), totalDays)

    try {
      const data = await Project.create({
        name,
        idCustomer,
        emailCustomer,
        addressCustomer,
        typeCompany,
        startTime,
        endTime,
        totalDays,
        projectManager
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
