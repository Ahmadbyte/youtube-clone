import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './Home.css';
import YouTubeLogo from '../logo.png'; // Add the YouTube logo image in your project

// Mock video data for testing
const mockVideos = [
  {
    _id: '1',
    title: 'Sample Video 1',
    videoUrl: 'https://www.youtube.com/watch?v=R8I3FOX7aZY',
    description: 'This is a sample video 1',
  },
  {
    _id: '2',
    title: 'Sample Video 2',
    videoUrl: 'https://www.youtube.com/watch?v=_Fwf45pIAtM&list=PL8UhM2ZIAXwt9LTHYZ74L6i3cO2xa_qYz',
    description: 'This is a sample video 2',
  },
  {
    _id: '3',
    title: 'Sample Video 3',
    videoUrl: 'https://www.youtube.com/watch?v=69pPYkGiEAQ',
    description: 'This is a sample video 3',
  },
  {
    _id: '4',
    title: 'Sample Video 4',
    videoUrl: 'https://www.youtube.com/watch?v=R8I3FOX7aZY',
    description: 'This is a sample video 4',
  },
  // Add more mock videos as needed
];

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Simulating fetch operation
    setTimeout(() => {
      setVideos(mockVideos); // Set mock videos after a delay (simulating API fetch)
    }, 1000); // Delay for 1 second (1000 milliseconds)
  }, []);

  return (
    <div className="videos-container">
      <header className="header">
        <img src={YouTubeLogo} alt="YouTube Logo" className="youtube-logo" />
        <h1 className="youtube-text">YouTube</h1>
      </header>
      <ul>
        {videos.map((video) => (
          <li key={video._id} className="video-item">
            <h3>{video.title}</h3>
            <div className="video-player">
              <ReactPlayer
                url={video.videoUrl}
                width="100%"
                height="100%"
                controls
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            </div>
            <p>{video.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
