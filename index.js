// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// --- Define the Project Schema and Model ---
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    technologies: [String],
    imageUrl: String,
    liveUrl: String,
    githubUrl: String,
    date: { type: Date, default: Date.now },
});

const Project = mongoose.model('Project', projectSchema);


// --- API Routes ---

// GET all projects
// $GET \ /api/projects$
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ date: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new project (for your admin panel later)
// $POST \ /api/projects$
app.post('/api/projects', async (req, res) => {
    const newProject = new Project(req.body);
    try {
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// You would also add PUT (update) and DELETE routes here for full CRUD functionality.

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
