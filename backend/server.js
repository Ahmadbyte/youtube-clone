const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/video');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// File Upload Middleware (using multer)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Uploads folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique file name generation
  }
});
const upload = multer({ storage: storage });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://ahmad:SaFb123@cluster0.08sqnhz.mongodb.net/Youtube?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Server port
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
