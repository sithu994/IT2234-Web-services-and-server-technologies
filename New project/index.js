const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

// Import routes
const etfRoute = require('./routes/etfRoute');
const employeeRoute = require('./routes/employeeRoute');
const departmentRoute = require('./routes/departmentRoute');
const projectRoute = require('./routes/projectRoute');

// Middleware
app.use(express.json());

// Use routes
app.use('/etf', etfRoute);
app.use('/employee', employeeRoute);
app.use('/department', departmentRoute);
app.use('/project', projectRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/etfDB')
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('DB error:', err));

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
