const mongoose = require('mongoose')
const departmentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true}
})

const Department = mongoose.model('Department',departmentSchema)
// const PM = new Department({
//     _id:'PM',
//     name:'Project Management'
// })
// const HR = new Department({
//     _id:'HR',
//     name:'Human Resources'
// })
// PM.save()
// HR.save()

module.exports=Department