const { Router } = require("express");
const { timerController } = require("../controllers/timer.controller");
const router = Router();

router.post("/timerStart", timerController.createTimer);
router.post("/timerStop", timerController.stopTimer)
module.exports = router