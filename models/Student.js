const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    degreeId:{type:String,require:true,ref:'degrees'}

})

const Student = mongoose.model('student',studentSchema)
const Kolins = new Student({
    _id:'2021IT01',
    name:'Peter Kolins',
    date_of_birth:'01-05-1995',
    gender:'male',
    degreeId:'FAS2000ICT'
})
Kolins.save()
module.exports=Student