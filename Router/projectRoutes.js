const express = require('express');
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/ProjectController');

const router = express.Router();

router.get('/getAll', getProjects);
router.post('/create', createProject);
router.put('update/:id', updateProject);
router.delete('delete/:id', deleteProject);

module.exports = router;
