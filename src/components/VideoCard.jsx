import React, { useState, useEffect } from 'react';
import '../css/VideoCard.css';
import Tanmay from '../assets/Tanmay.jpg';
import Comments from './Comments';
import { API_KEY } from '../data';

const VideoCard = ({ videoId, brand }) => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]); // 👈 store YouTube comments

  // 🎥 Fetch video details
  const fetchVideo = async () => {
    const fetchvid_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    const response = await fetch(fetchvid_URL);
    const data = await response.json();
    setVideo(data.items[0]);
  };

  // 💬 Fetch comments for this video
  const fetchComments = async () => {
    const comments_URL = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=15&key=${API_KEY}`;
    const response = await fetch(comments_URL);
    const data = await response.json();
    setComments(data.items || []); // store comments array
  };

  useEffect(() => {
    if (videoId) {
      fetchVideo();
      fetchComments();
    }
  }, [videoId]);

  return (
    <div className="video-card">
      <div className="video">
        {video ? (
          <iframe
            className="radius"
            width="850"
            height="383"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video?.snippet?.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <p>loading...</p>
        )}
      </div>

      <h1 className="heading">{video?.snippet?.title || 'Loading title...'}</h1>

      <div className="channel-buttons">
        <div className="left-section">
          <img src={brand} alt="logo" className="round" />
          <div className="channel-informations">
            <p className="brand">
              {video?.snippet?.channelTitle || 'loading-channel-name'}
            </p>
            <p className="subscribers">65.8M subscribers</p>
          </div>
          <button className="button">Subscribe</button>
        </div>

        <div className="right-section">
          <div className="dislike-like">
            <div className="like">
              <i className="fa-solid fa-thumbs-up"></i>
              <span>{video?.statistics?.likeCount || '3.2M'}</span>
            </div>
            <i className="fa-solid fa-thumbs-down"></i>
          </div>
          <div className="share">
            <i className="fa-solid fa-share"></i>
            <span>share</span>
          </div>
          <div className="horizontal-ellipsis">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>

      <div className="description">
        <pre>{video?.snippet?.description || 'loading description'}</pre>
      </div>

      <div className="comments">
        {video
          ? `${video?.statistics?.commentCount || 0} Comments`
          : 'Loading comments...'}
      </div>

      <div className="input">
        <img src={Tanmay} alt="user" className="userr" />
        <form>
          <input type="text" placeholder="Add a comment..." />
        </form>
      </div>

      {/* 💬 Render comments dynamically */}
      {comments.length > 0 ? (
        comments.map((item) => (
          <Comments
            key={item.id}
            author={
              item.snippet.topLevelComment.snippet.authorDisplayName ||
              'Anonymous'
            }
            text={item.snippet.topLevelComment.snippet.textDisplay}
            time={item.snippet.topLevelComment.snippet.publishedAt}
            likes={item.snippet.topLevelComment.snippet.likeCount}
            authorImg={
              item.snippet.topLevelComment.snippet.authorProfileImageUrl
            }
          />
        ))
      ) : (
        <p>No comments found...</p>
      )}
    </div>
  );
};

export default VideoCard;
