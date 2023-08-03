const { Router } = require("express");
const { taskControllers } = require("../controllers/task.controllers");
const router = Router();

router.get("/tasks", taskControllers.getAllTasks);
router.get('/task/:id', taskControllers.getOneTask)
router.post('/task', taskControllers.createTask)
router.patch('/task/:id', taskControllers.changeTask)
router.delete('/task/:id', taskControllers.deleteTask)

module.exports = router