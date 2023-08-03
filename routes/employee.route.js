const Router = require('express');
const {employeeController}=require('../controllers/employee.controller');
const router = Router();

router.get('/getEmployees',employeeController.getEmployee);
router.post('/addEmployees',employeeController.postEmployee);
router.delete('/deleteEmployees/:id',employeeController.deleteEmployee);
router.patch('/patchEmployees/:id',employeeController.patchEmployee);

module.exports = router;