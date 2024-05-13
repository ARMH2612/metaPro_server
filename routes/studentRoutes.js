const express = require('express');
const { 
  addStudentGroup,
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent
} = require('../controllers/studentController.js');

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);
router.put('/:id', updateStudent);
router.put('/groups/:id', addStudentGroup);

module.exports = router;
