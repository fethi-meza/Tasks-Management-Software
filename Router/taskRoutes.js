const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/TaskController');

const router = express.Router();

router.get('/projects/:projectId/tasks', getTasks);
router.post('/projects/:projectId/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
