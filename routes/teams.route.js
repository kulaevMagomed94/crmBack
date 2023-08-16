const { Router } = require("express");
const { teamControllers } = require("../controllers/team.controllers");
const router = Router();

router.get("/teams", teamControllers.getAllTeams);
router.get('/team/:id', teamControllers.getOneTeam)
router.post('/team', teamControllers.createTeam)
router.patch('/team/:id', teamControllers.changeTeam)
router.delete('/team/:id', teamControllers.deleteTeam)

module.exports = router