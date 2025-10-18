import React from 'react'
import '../css/Video.css'
import VideoCard from '../components/VideoCard'
import Recommendations from '../components/Recommendations'
import {useParams} from 'react-router-dom'
const Video = () => {
  const{videoId,tag}=useParams();
  const brand=decodeURIComponent(tag);
  return (
    <div className="container2">
      <VideoCard videoId={videoId} brand={brand}/>
      <Recommendations/>
    </div>
  )
}

export default Video
