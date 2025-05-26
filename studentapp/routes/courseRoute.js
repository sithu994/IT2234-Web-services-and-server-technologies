const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// POST a new course
router.post('/', async (req, res) => {
    try {
        console.log('Request body:', req.body); // Add this line
        const newCourse = new Course(req.body);
        const saved = await newCourse.save();
        res.status(201).json(saved);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;
