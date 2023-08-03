const Task = require("../models/Task.model");


module.exports.taskControllers = {
  getAllTasks: async (req, res) => {
    const task = await Task.find();
    res.json(task);
  },

  getOneTask: async (req, res) =>{
    try {

      const taskId = req.params.id;
    
      const doc = await Task.findById(
          {
          _id: taskId
          })
    
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

  deleteTask: async (req, res) => {
    const { id } = req.params;

    try {
      const task = await Task.findByIdAndDelete(id);
      
        return res.json("удолено " + task);

    } catch (error) {
      return res.status(401).json({ error: "ошибка" + error.message });
    }
  },
  createTask: async (req, res) => {
    const { name } = req.body;

    try {
      const task = await Task.create({
        name,
      });
      return res.json(task);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },

  changeTask: async (req, res) => {
    const {id} = req.params

    const { name } = req.body;

    try{
        const task = await Task.findByIdAndUpdate(id, {

            name,
        
      });
      return res.json(task + ' была изменена');
    } catch (error) {
        return res.status(401).json(error.message + ' ощибка изменения');
      }
  }

};