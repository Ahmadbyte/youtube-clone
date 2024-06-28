// backend/routes/video.js
const express = require('express');
const { uploadVideo, getVideos } = require('../controllers/video');
const authMiddleware = require('../middleware/auth');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/upload', authMiddleware, upload.single('video'), uploadVideo);
router.get('/', getVideos);

module.exports = router;
