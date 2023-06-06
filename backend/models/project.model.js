const {Schema, model} = require('mongoose');

const ProjectSchema = Schema({
  projectName: {type: String, required: true},
  category: {type: String, required: true},
  department: {type: String, required: true},
  division: {type: String, required: true},
  endDate: {type: String, required: true},
  location: {type: String, required: true},
  priority: {type: String, required: true},
  reason: {type: String, required: true},
  startDate: {type: String, required: true},
  status: {type: String, required: true},
  type: {type: String, required: true},
})

const ProjectModel = model('projects', ProjectSchema);

module.exports = ProjectModel;