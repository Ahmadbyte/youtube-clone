const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

router.post('/link', async (req, res) => {
  const { videoLink, title, description } = req.body;

  try {
    const newVideo = new Video({
      videoUrl: videoLink,
      title,
      description,
      likes: 0,
      comments: [],
    });

    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload video link', error });
  }
});

router.post('/like/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Video.findById(id);
    video.likes += 1;
    await video.save();
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: 'Failed to like video', error });
  }
});

router.post('/comment/:id', async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  try {
    const video = await Video.findById(id);
    video.comments.push(comment);
    await video.save();
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: 'Failed to comment on video', error });
  }
});

module.exports = router;
