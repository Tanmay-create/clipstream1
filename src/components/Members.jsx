import React from 'react'
import '../css/Members.css'
import {Link} from 'react-router-dom'
import {value_converter} from '../data'
import moment from 'moment'
import{API_KEY} from '../data'
import {useState, useEffect} from 'react'
const Members = ({item}) => {
   const[logo, setLogo]=useState(null);
       const fetchlogo=async()=>{
           const logo_URL=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`;
           await fetch(logo_URL)
           .then(response=>response.json())
           .then(data=>setLogo(data.items[0]))
       }
       useEffect(()=>{
         fetchlogo();
       },[]);
  return (
    //optional chaining to fetch data
     <Link to={`/${item.id}/${encodeURIComponent(logo?.snippet?.thumbnails?.high?.url || "loading-tag")}`}><div className="video-1">
        <div className="thumbnail-container">
                <img src={item.snippet.thumbnails.high.url} alt="thumbnail" className="thumbnail"/>
                </div>
                <div className="channel-info">
                    <img src={logo?logo.snippet.thumbnails.high.url:""} alt="logo" className="circle"/>
                    {item.snippet.title.length>50? item.snippet.title.slice(0,50)+"...":item.snippet.title}
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className="channel-name">
                    <p>{item.snippet.channelTitle}</p>
                    <div className="verified-badge"><i class="fa-solid fa-check"></i></div>
                </div>
                <div className="figures">{value_converter(item.statistics.viewCount)}. {moment(item.snippet.publishedAt).fromNow()}</div>
      </div></Link>
  )
}

export default Members
