const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const projectRoutes = require('./Router/projectRoutes');
const taskRoutes = require('./Router/taskRoutes');

const app = express();


app.use(bodyParser.json());


const MONGO_URI = 'mongodb://localhost:27017/projectsDB'; // Replace with your MongoDB URI
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));


app.use('/', projectRoutes);
app.use('/', taskRoutes);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
