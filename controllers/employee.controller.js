const Employee = require("../models/Employee.model");
module.exports.employeeController = {
  getEmployee: async (req, res) => {
    try {
      const employees = await Employee.find({}).populate("category") ;
      res.json(employees);
    } catch (error) {
      res.json(error.message("Ошибка в getEmployee"));
    }
  },

  postEmployee: async (req, res) => {
    const {
      email,
      firstName,
      secondName,
      login,
      password,
      category,
      task,
      team,
      role,
      firm
    } = req.body;

    console.log(req.files);
    try {
      const employee = await Employee.create({
        email,
        firstName,
        secondName,
        login,
        password,
        category,
        task,
        team,
        role,
        firm,
        image: req.files && req.files.map((item) => item.path),
      });
      res.json(employee);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteEmployee: async (req, res) => {
    try {
      await Employee.findByIdAndDelete(req.params.id);
      res.json("Сотрудник удален :)");
    } catch (error) {
      res.json(error.message("Ошибка в deleteEmployee"));
    }
  },
  patchEmployee: async (req, res) => {
    const {
      email,
      firstName,
      secondName,
      login,
      password,
      category,
      task,
      team,
      role,
    } = req.body;
    try {
      const employee = await Employee.findByIdAndUpdate(
        req.params.id,
        {
          email,
          firstName,
          secondName,
          login,
          password,
          category,
          task,
          team,
          role,
          image: req.files && req.files.map(item=>path)
        },
        
        { new: true }
      );
      return res.json(employee);
    } catch (error) {
      res.json(error.message("Ошибка в patchEmployee"));
    }
  },
};
