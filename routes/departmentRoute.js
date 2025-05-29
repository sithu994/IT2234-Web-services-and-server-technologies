const express=require('express')
const router = express.Router()
const Department = require('../models/Department')
const { mongoose } = require('mongoose')
const Employee = require('../models/Employee'); 

router.get('/',async (req,res)=>{
    try{
        const results = await Department.find()
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
        const results = await Department.findById(id)
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

//give a dept id and get the employees who are working there
router.get('/emp/:did',async (req,res)=>{
    try{
        const did = req.params.id
        //const results = await Employee.find({departmentId:did}).populate("departmentId")
        //display only emp id,name,department name
        const results = await Department.find(
            {departmentId:did},
            {name:1, departmentId:1}
        ).populate("departmentId")
        // Manipulate the results
        const filterResult = results.map(emp => ({
            employee_id:emp._id,
            employee_name:emp.name,
            department_name:emp.departmentId.name
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

// Show the employee count along with each department details
router.get('/count', async (req, res) => {
    try {
        const departments = await Department.find();
        const results = await Promise.all(departments.map(async (dept) => {
            const count = await Employee.countDocuments({
                departmentID: dept._id
            })
            return {
                departmentId: dept._id,
                departmentName: dept.name,
                employeeCount: count
            }
        }))

        res.status(200).json(results)
    }
    catch (error) {
        console.error(error)
        res.status(500).send("Server Error..!")
    }
})

router.get('/empcount', async (req, res) => {
    try {
        const results = await Department.aggregate([
            {
                $lookup: {
                    from: "emplooyee",
                    localField: "_id",
                    foreignField: "departmentId",
                    as:"emps"
                },
                $project: {
                    name:1,
                    location:1,
                    number_of_employees:{$size:"$emps"}
                }
            }
        ])
    }
    catch(error) {
        console.error(error)
        res.status(500).send("Server Error..!")
    }
})

module.exports=router
