import React from 'react'
import '../css/VideoCard.css'
import Tanmay from '../assets/Tanmay.jpg'
import Comments from './Comments'
import {useState, useEffect} from 'react'
import {API_KEY} from '../data'
const VideoCard = ({videoId, brand}) => {
  const[video, setVideo]=useState(null);
  const fetchvideo=async()=>{
    const fetchvid_URL=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(fetchvid_URL)
    .then(response=>response.json())
    .then(dat=>setVideo(dat.items[0]))
  }
  useEffect(()=>{
    if(videoId){
    fetchvideo();
    }
  },[videoId])
  return (
    
    <div className="video-card">
      <div className="video">
        {video?<iframe className="radius"width="850" height="383" src={`https://www.youtube.com/embed/${videoId}`} title="Saiyaara Title Song | Ahaan Panday, Aneet Padda | Tanishk Bagchi, Faheem A, Arslan N | Irshad Kamil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>:<p>loading...</p>}
      </div>
      <h1 className="heading">{video?.snippet?.title || "Loading title..."}</h1>
      <div className="channel-buttons">
        <div className="left-section">
        <img src={brand} alt="logo" className="round"/>
        <div className="channel-informations">
          <p className="brand">{video?.snippet?.channelTitle || "loading-channel-name"}</p>
          <p className="subscribers">65.8M subscribers</p>
        </div>
        <button value="submit" className="button"></button>
        </div>
        <div className="right-section">
          <div className="dislike-like">
            <div className="like">
              <i class="fa-solid fa-thumbs-up"></i>
              <span>3.2M</span>
            </div>
            <i class="fa-solid fa-thumbs-down"></i>
          </div>
          <div className="share">
            <i class="fa-solid fa-share"></i>
            <span>share</span>
          </div>
          <div className="horizontal-ellipsis">
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>
      <div className="description">
      {video?.snippet?.description||"loading description"}
      </div>
     <div className="comments">
        12,2345 Comments
      </div>
      <div className="input">
        <img src={Tanmay} alt="user" className="userr"/>
        <form>
          <input type="text" placeholder="add comments here.." />
        </form>
      </div>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>

    </div>
  )
}

export default VideoCard
