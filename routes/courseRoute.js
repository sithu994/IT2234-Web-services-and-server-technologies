const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Get all courses
router.get('/', async (req, res) => {
    try {
        const results = await Course.find();
        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, No courses found.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error!");
    }
});

// Get course by ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Course.findById(id);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send("Sorry, course not found.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error!");
    }
});

// Get course by code and cid
router.get('/:code/:cid', async (req, res) => {
    try {
        const code = req.params.code;
        const cid = req.params.cid;
        const results = await Course.find({ code: code, cid: cid });
        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, no courses found for given code and cid.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error!");
    }
});

// Count all courses
router.get('/count/all', async (req, res) => {
    try {
        const count = await Course.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error!");
    }
});

module.exports = router;