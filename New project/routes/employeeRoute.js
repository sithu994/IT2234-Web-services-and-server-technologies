const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const Project = require('../models/Project');

// Create a new employee
router.post('/', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate('department')
      .populate('projects');
    res.send(employees);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Assign project to employee (and vice versa)
router.post('/:id/projects', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    const project = await Project.findById(req.body.projectId);

    if (!employee || !project) return res.status(404).send("Employee or Project not found");

    employee.projects.push(project._id);
    await employee.save();

    project.employees.push(employee._id);
    await project.save();

    res.send({ employee, project });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
