const express = require('express');
const cors = require('cors'); // Import the cors module
const connectDB = require('./config/db');
require('dotenv').config(); // Ensure dotenv is required to load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/videos', require('./routes/video'));

// Server port
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
