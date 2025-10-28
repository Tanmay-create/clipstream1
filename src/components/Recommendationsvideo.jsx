import React from 'react'
import '../css/Recommendationsvideo.css'
import thumbnail from '../assets/thumbnail.jpg'
import {Link} from 'react-router-dom'
import { value_converter} from '../data'
import moment from 'moment'
const Recommendationsvideo = ({item}) => {
  
  return (
  
    <div className="individual-video">
      <img src={item?.snippet?.thumbnails?.high?.url} alt="thumbnail" className="corners"/>
      <div className="vid-info">
        <p className="title">{item?.snippet?.title}</p>
        <div className="channel-combo">
            <p>{item?.snippet?.channelTitle}</p>
            <div className="verified-badge">
                <i class="fa-solid fa-check"></i>
            </div>
        </div>
        <div className="date-details">
           {value_converter(item?.statistics?.viewCount)}<b>.</b> {moment(item?.snippet?.publishedAt).fromNow()}
        </div>
      </div>
    </div>
  
  )
}

export default Recommendationsvideo
