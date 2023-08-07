const Router = require('express')
const router = Router();
const {firmController}=require('../controllers/firm.controllers')

router.get('/getFirms',firmController.getFirm)
router.post('/postFirms',firmController.postFirm)
router.delete('/deleteFirm/:id',firmController.deleteFirm)
router.patch('/patchFirms/:id',firmController.patchFirm)

module.exports = router