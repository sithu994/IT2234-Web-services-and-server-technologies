const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
});

module.exports = mongoose.model('Employee', employeeSchema);
