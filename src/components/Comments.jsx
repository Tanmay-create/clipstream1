import React from 'react';
import '../css/Comments.css';

const Comments = ({ author, text, time, likes, authorImg }) => {
  // Format time
  const formattedTime = new Date(time).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="comment">
      <div className="left">
        <div className="img">
          <img src={authorImg} alt="commenter" className="userstyle" />
        </div>
        <div className="commenter-details">
          <p className="username">
            @{author} <span>{formattedTime}</span>
          </p>
          <p
            className="particulars"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>

          <div className="rest">
            <div className="dislike-like">
              <div className="like">
                <i className="fa-solid fa-thumbs-up"></i>
                <span>{likes}</span>
              </div>
              <i className="fa-solid fa-thumbs-down"></i>
            </div>
            <span>Reply</span>
          </div>
        </div>
      </div>
      <div className="right">
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  );
};

export default Comments;
