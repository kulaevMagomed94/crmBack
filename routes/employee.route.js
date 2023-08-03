const Router = require('express');
const {employeeController}=require('../controllers/employee.controller');
const router = Router();
const multerMiddleware = require('../middleware/multer.middleware')

router.get('/getEmployees',employeeController.getEmployee);
router.post('/addEmployees', multerMiddleware.array('image', 5),employeeController.postEmployee);
router.delete('/deleteEmployees/:id',employeeController.deleteEmployee);
router.patch('/patchEmployees/:id',multerMiddleware.array('image', 5),employeeController.patchEmployee);

module.exports = router;