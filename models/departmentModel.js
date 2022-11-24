const mongoose = require('mongoose');
const slugify = require('slugify');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the department name.']
  },
  slug: String,
  desc: {
    type: String,
    required: [true, 'Please provide the department description.']
  },
  managedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'Department'
  },
  manages: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Department'
    }
  ]
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
