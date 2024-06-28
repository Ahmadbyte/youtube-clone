// backend/controllers/video.js
const Video = require('../models/Video');

const uploadVideo = async (req, res) => {
  const { title, description } = req.body;
  const videoUrl = req.file.path;

  try {
    const video = new Video({
      title,
      description,
      videoUrl,
      user: req.user.id,
    });

    await video.save();
    res.status(201).json({ message: 'Video uploaded' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('user', 'username');
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { uploadVideo, getVideos };
