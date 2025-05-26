const mongoose = require('mongoose')
const degreeSchema = new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    credits:{type:Number,require:true},  // require:true --> You must provide this data
    duration:{type:Number,require:true},
    faculty:{type:String}
})

const Degree= mongoose.model('degrees',degreeSchema)
const BIT = new Degree({
    _id:'FAS2000ICT',
    name:'Bachelor of Information Technology',
    credits:120,
    duration:3,
    faculty:'Faculty of applied Science'
})

//BIT.save()
module.exports=Degree
