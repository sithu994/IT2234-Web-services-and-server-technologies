const express = require('express');
const app  = express();
const port = 3001;
const mongoose =require('mongoose')
const coursert = require('./routes/CourseRoute')
const degreeert = require('./routes/degreeRoute')
const studentert = require('./routes/studentRoute')

app.use(express.json())
app.use('/course',coursert)
app.use('/Degree',degreeert)
app.use('/Student',studentert)
mongoose.connect('mongodb://localhost:27017/').then(()=>{
    console.log('Databse connects');
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})  