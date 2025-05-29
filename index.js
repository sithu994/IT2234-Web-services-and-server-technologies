const express = require('express');
const app =express();
const port=3002;
const mongoose = require('mongoose')

const employeert= require('./routes/employeeRoute')
const departmentrt= require('./routes/departmentRoute')
const etfrt= require('./routes/etfRoute')
const projectrt= require('./routes/projectRoute')

app.use(express.json())
app.use('/Employee',employeert)
app.use('/Department',departmentrt)
app.use('/ETF',etfrt)
app.use('/Project',projectrt)

mongoose.connect('mongodb://localhost:27017/employeeinfoDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})