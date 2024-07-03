import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Home.css';
import YouTubeLogo from '../logo.png';
import UserLogo from '../user.png';
import LikeLogo from '../likw.png'; // Add a like logo image in your project
import CommentLogo from '../cmt.png'; // Add a comment logo image in your project
import { AuthContext } from '../AuthContext';

const mockVideos = [
  {
    _id: '1',
    title: 'Surah Mulk',
    videoUrl: 'https://www.youtube.com/watch?v=JwXN2fnc8Uk',
    description: 'This is Surah Mulk',
    likes: 0,
    comments: [],
  },
  {
    _id: '2',
    title: 'Arabic',
    videoUrl: 'https://www.youtube.com/watch?v=_Fwf45pIAtM&list=PL8UhM2ZIAXwt9LTHYZ74L6i3cO2xa_qYz',
    description: 'Arabic',
    likes: 0,
    comments: [],
  },
  {
    _id: '3',
    title: 'Kissi ki Muskurahato',
    videoUrl: 'https://www.youtube.com/watch?v=69pPYkGiEAQ',
    description: 'Vintage song',
    likes: 0,
    comments: [],
  },
  {
    _id: '4',
    title: 'Kalam eneih',
    videoUrl: 'https://www.youtube.com/watch?v=R8I3FOX7aZY',
    description: 'Arabic Song',
    likes: 0,
    comments: [],
  },
];

const Home = () => {
  const { user } = useContext(AuthContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setVideos(mockVideos);
    }, 1000);
  }, []);

  const handleLike = (id) => {
    setVideos(videos.map(video => video._id === id ? { ...video, likes: video.likes + 1 } : video));
  };

  const handleComment = (id, comment) => {
    setVideos(videos.map(video => video._id === id ? { ...video, comments: [...video.comments, comment] } : video));
  };

  return (
    <div className="videos-container">
      <header className="header">
        <div className="header-left" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={YouTubeLogo} alt="YouTube Logo" className="youtube-logo" />
          <h1 className="youtube-text">YouTube</h1>
        </div>
        <div className="user-info">
          <img src={UserLogo} alt="User Logo" className="user-logo" />
          <span className="username">Self</span>
        </div>
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
            <div className="video-actions">
              <button onClick={() => handleLike(video._id)}>
                <img src={LikeLogo} alt="Like" className="action-logo" /> {video.likes}
              </button>
              <button onClick={() => handleComment(video._id, prompt('Enter your comment:'))}>
                <img src={CommentLogo} alt="Comment" className="action-logo" /> {video.comments.length}
              </button>
            </div>
            <div className="comments-section">
              {video.comments.map((comment, index) => (
                <p key={index} className="comment">{comment}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <Link to='/upload'><button>Upload</button></Link>
    </div>
  );
};

export default Home;
