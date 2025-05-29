const mongoose = require('mongoose')
const projectSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    duration:{type:Number,require:true},
    departmentId:{
        type:String,
        require:true,
        ref:'Department'
    }
})

const Project = mongoose.model('project',projectSchema)
// const StApp = new Project({
//     _id:'PR001',
//     name:'Student Application',
//     duration:3,
//     department:'PM'
// })

// const EmpApp = new Project({
//     _id:'PR002',
//     name:'Employee Application',
//     duration:3,
//     department:'HR'
// })

// StApp.save()
// EmpApp.save()

module.exports=Project