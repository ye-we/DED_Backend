const router = require('express').Router();
const departmentController = require('./../controllers/departmentController');

router
  .route('/departments')
  .get(departmentController.getAllDepartments)
  .post(departmentController.newDepartment);
router
  .route('/departments/:id')
  .patch(departmentController.updateDepartment)
  .get(departmentController.getDepartment);

module.exports = router;
