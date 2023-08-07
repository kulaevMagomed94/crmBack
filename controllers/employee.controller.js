const Employee = require("../models/employee.model");
module.exports.employeeController = {
  getEmployee: async (req, res) => {
    try {
      const employees = await Employee.find({});
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
    } = req.body;

    console.log(req.files)
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
  patchEmployee: async (req, res)=>{
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.id,{
        email:req.body.email,
        firstName:req.body.firstName,
        secondName:req.body.secondName,
        category:req.body.category,
        role:req.body.role,
        image: req.files.map(item => item.path)
        })
        res.json(employee)
    }catch(error){
        res.json(error.message('Ошибка в patchEmployee'))
    }
  }
};
