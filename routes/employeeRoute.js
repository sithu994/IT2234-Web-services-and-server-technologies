const express=require('express')
const router = express.Router()
const Employee = require('../models/Employee')
const { mongoose } = require('mongoose')

router.get('/',async (req,res)=>{
    try{
        const results = await Employee.find()
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 
router.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const results = await Employee.findById(id)
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
})

router.get('/emp',async (req,res)=>{
    try{
        const results = await Employee.find({},{name:1,$projectId:0}).populate("projectId").populate("current_projects")
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 
router.get('/procount/',async (req,res)=>{
    try{
        const results = await Employee.find()
        const newResults = results.map(emp=>({
            id:emp._id,
            name:emp.name,
            number_of_project:emp.projectIds.length
        }))
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
})

module.exports=router