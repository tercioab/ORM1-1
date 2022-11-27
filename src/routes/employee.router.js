const express = require('express');
const employeeController = require('../controllers/employee.controller');

const router = express.Router();
router.get('/:id', employeeController.getById);
router.get('/', employeeController.getAll);
router.post('/', employeeController.insert);

module.exports = router;