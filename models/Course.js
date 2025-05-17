const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    code:{type:String},
    name:{type:String},
    credits:{type:Number},
    description :{type:String}
})

const Course = mongoose.model('courses',courseSchema)
const webservice = new Course({
    code:'IT2234',
    name:'practical for webservive',
    credits:3,
    description:'Build a REST API with NodeJS technology'
})
webservice.save()
module.exports=Course;