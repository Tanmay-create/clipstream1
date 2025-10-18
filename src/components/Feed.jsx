import React from 'react'
import '../css/Feed.css'
import Members from './Members'
import {API_KEY} from '../data'
import {useState, useEffect} from 'react'
const Feed = ({sidebar}) => {
  const [dataa, setData]=useState([]);
  const fetching_data = async () => {
    let count = 0;
    let allVideos = [];
    let nextPageToken = '';

    while (count < 200) {
      const fetch_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}&pageToken=${nextPageToken}`;

      const response = await fetch(fetch_URL);
      const data = await response.json();

      if (data.items) {
        allVideos = [...allVideos, ...data.items];
        count += data.items.length;
      }

      if (!data.nextPageToken) break;
      nextPageToken = data.nextPageToken;
    }

    setData(allVideos);
  };

  useEffect(() => {
    fetching_data();
  }, []);


  return (
    <div className={`feed ${sidebar?"": "styles"}`}>
      {dataa.map((item)=>{
         return (
         <Members item={item}/>
        )
      })} 
    </div>
  )
}

export default Feed
