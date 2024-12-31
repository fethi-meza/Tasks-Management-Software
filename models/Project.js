const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  startDate: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
