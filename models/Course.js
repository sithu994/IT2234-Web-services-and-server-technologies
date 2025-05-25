const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    code:{type:String,require:true},
    name:{type:String,require:true},
    credits:{type:Number,require:true},
    description:{type:String}
})

const Course = mongoose.model('courses',courseSchema)
const webservices = new Course({
    code:'IT2234',
    name:'practical for webService',
    credit:3,
    description:'Build a REST API with NodeJS technology'
})
webservices.save()
module.exports=Course