const express = require('express')
const router = express.Router()
const student = require('../models/Student')
const mongoose = require('mongoose')

router.get('/', async (req,res)=>{
    try{
        const results = await student.find()
        if(results){
            res.status(200).json(results)
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})


router.get('/course', async (req,res)=>{
    try{
        const results = await student.find({},{name:1,degreeId:0}).populate("degreeId").populate("enroled_courses")
        if(results){
            res.status(200).json(results)
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})


router.get('/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const results = await student.find({code:id})
        if(results){
            res.status(200).json(results)
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})


router.get('/:code/:cid', async (req,res)=>{
    try{
        const id = req.params.cid
        const results = await student.find({code:cid})
        const count = results.length
        console.log(count)
        if(results){
            if(count>0)
            {
                res.status(200).json(results)
            }
            

        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})

module.exports=router  