const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

// Import routes
const courseRt = require('./routes/CourseRoute');
const studentRt = require('./routes/studentRoute');
const degreeRt = require('./routes/degreeRoute');

// Middleware
app.use(express.json());

// Routes
app.use('/Course', courseRt);
app.use('/Student', studentRt);
app.use('/Degree', degreeRt);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/detailsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connected'))
.catch(err => console.error('DB connection error:', err));

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
