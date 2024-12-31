const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    alias: { type: String, required: true },
    title: { type: String, required: true },
    duration: { type: String, required: true },
    predecessors: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', TaskSchema);
