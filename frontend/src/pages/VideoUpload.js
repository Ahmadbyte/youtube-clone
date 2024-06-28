import React, { useState } from 'react';
import axios from 'axios';
import './VideoUpload.css'

const VideoUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoLink, setVideoLink] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if ((!file && !videoLink) || !title || !description) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      if (file) {
        const formData = new FormData();
        formData.append('videoFile', file);
        formData.append('title', title);
        formData.append('description', description);

        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };

        const response = await axios.post('http://localhost:5001/api/videos/upload', formData, config);
        console.log('Upload response:', response.data);
        alert('Video uploaded successfully.');
      } else if (videoLink) {
        // Handle video link submission (e.g., save to database)
        console.log('Video link:', videoLink);
        alert('Video link submitted.');
      }
      
      // Reset form fields after submission
      setFile(null);
      setTitle('');
      setDescription('');
      setVideoLink('');

    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Failed to upload video.');
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Video File:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <label>Video Link:</label>
          <input type="text" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default VideoUpload;
