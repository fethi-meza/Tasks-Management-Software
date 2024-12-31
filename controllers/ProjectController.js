const Project = require('../models/Project');
const Task = require('../models/Task');

// Get All Projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('tasks');
    res.status(200).json({
      status: 'success',
      message: 'Projects retrieved successfully',
      data: projects,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Create New Project
exports.createProject = async (req, res) => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const project = await Project.create({ name, description, startDate, endDate });
    res.status(201).json({
      status: 'success',
      message: 'Project created successfully',
      data: project,
    });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

// Update Project
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, startDate, endDate } = req.body;
    const project = await Project.findByIdAndUpdate(
      id,
      { name, description, startDate, endDate },
      { new: true }
    );
    if (!project) {
      return res.status(404).json({ status: 'error', message: 'Project not found' });
    }
    res.status(200).json({
      status: 'success',
      message: 'Project updated successfully',
      data: project,
    });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ status: 'error', message: 'Project not found' });
    }
    await Task.deleteMany({ projectId: id }); // Delete associated tasks
    res.status(200).json({ status: 'success', message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
