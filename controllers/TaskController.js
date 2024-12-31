const Task = require('../models/Task');

// Get All Tasks Associated With Project
exports.getTasks = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await Task.find({ projectId });
    res.status(200).json({
      status: 'success',
      message: 'Tasks retrieved successfully',
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Create New Task Associated With Project
exports.createTask = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { alias, title, duration, predecessors } = req.body;

    const task = await Task.create({
      projectId,
      alias,
      title,
      duration,
      predecessors,
    });

    res.status(201).json({
      status: 'success',
      message: 'Task created successfully',
      data: task,
    });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { alias, title, duration, predecessors } = req.body;

    const task = await Task.findByIdAndUpdate(
      id,
      { alias, title, duration, predecessors },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ status: 'error', message: 'Task not found' });
    }

    res.status(200).json({
      status: 'success',
      message: 'Task updated successfully',
      data: task,
    });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ status: 'error', message: 'Task not found' });
    }

    res.status(200).json({ status: 'success', message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
