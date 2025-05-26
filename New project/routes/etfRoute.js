const express = require('express');
const router = express.Router();
const ETF = require('../models/ETF');

// Create ETF entry for an employee
router.post('/', async (req, res) => {
  try {
    const etf = new ETF(req.body);
    await etf.save();
    res.status(201).send(etf);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all ETF records
router.get('/', async (req, res) => {
  try {
    const etfs = await ETF.find().populate('employee');
    res.send(etfs);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get ETF by employee ID
router.get('/:employeeId', async (req, res) => {
  try {
    const etf = await ETF.findOne({ employee: req.params.employeeId }).populate('employee');
    if (!etf) return res.status(404).send('ETF not found');
    res.send(etf);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
