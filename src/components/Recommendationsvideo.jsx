import React from 'react'
import '../css/Recommendationsvideo.css'
import thumbnail from '../assets/thumbnail.jpg'
import {Link} from 'react-router-dom'
const Recommendationsvideo = () => {
  return (
    <Link to="/video">
    <div className="individual-video">
      <img src={thumbnail} alt="thumbnail" className="corners"/>
      <div className="vid-info">
        <p className="title">Saiyaara Title Song | Ahaan Panday, Aneet Padda | Tanishk...</p>
        <div className="channel-combo">
            <p>YRF</p>
            <div className="verified-badge">
                <i class="fa-solid fa-check"></i>
            </div>
        </div>
        <div className="date-details">
            68.6M <b>.</b> 2 months ago
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Recommendationsvideo
