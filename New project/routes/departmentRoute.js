const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// Create a new department
router.post('/', async (req, res) => {
  try {
    const department = new Department(req.body);
    await department.save();
    res.status(201).send(department);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.send(departments);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
