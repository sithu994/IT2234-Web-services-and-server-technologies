const mongoose = require('mongoose');

const etfSchema = new mongoose.Schema({
  etfNumber: String,
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    unique: true
  }
});

module.exports = mongoose.model('ETF', etfSchema);
