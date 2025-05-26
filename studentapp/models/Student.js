const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    _id:{type:String,require:true},// require:true --> You must provide this data
    name:{type:String,require:true},
    date_of_birth:{type:Date},  
    gender:{type:String},
    degreeId:{
        type:String,
        require:true,
        ref:'degrees'   // here you have to mentioned collection name
    },

    enroled_courses:[{type:mongoose.Types.ObjectId,ref:'courses'}]
})

const Student= mongoose.model('students',studentSchema)
const kolins = new Student({

    _id:'2021ict01',
    name:'Peter Kolins',
    date_of_birth:'01-05-1995',  
    gender:'male',
    degreeId:'FASFAS2000ICT',
    enroled_courses:['68321b2c7b56cfeb757d1ca3','68321b2c7b56cfeb757d1ca2']
        
})

//kolins.save()
module.exports=Student
