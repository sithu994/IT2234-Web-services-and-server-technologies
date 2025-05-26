const mongoose = require('mongoose');

// Correct schema with 'required' (not 'require')
const courseSchema = new mongoose.Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    credits: { type: Number, required: true },
    description: { type: String }
});

// Register model
const Course = mongoose.model('Course', courseSchema); // NOTE: model name is singular, Mongoose will use 'courses' collection

// Optional: Save sample documents
const webservice = new Course({
    code: 'IT2234',
    name: 'Practical for web services',
    credits: 3,
    description: 'Build a REST API with NodeJS technology'
});

const osSystem = new Course({
    code: 'IT2214',
    name: 'Practical for operating systems',
    credits: 4,
    description: 'Linux commands'
});

// Uncomment to save ONCE
// webservice.save();
// osSystem.save();

module.exports = Course;
