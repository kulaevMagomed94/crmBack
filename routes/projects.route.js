const { Router } = require("express");
const { projectsController } = require("../controllers/projects.controller");

const router = Router();

router.post("/", projectsController.createProjects);
router.get("/", projectsController.getProjects);
router.get("/:id", projectsController.getOneProjects);
router.delete("/:id", projectsController.deleteProjects);

module.exports = router;
    