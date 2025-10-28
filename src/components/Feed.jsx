import React from 'react'
import '../css/Feed.css'
import Members from './Members'
import {API_KEY} from '../data'
import {useState, useEffect} from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/context'
const Feed = ({sidebar}) => {
  const {sidebarData}=useContext(AppContext);
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
    <>
        {sidebarData === '' && (
        <div className={`feed ${sidebar ? '' : 'styles'}`}>
          {dataa.map((item) => (
            <Members key={item.id} item={item} />
          ))}
        </div>
      )}
        {sidebarData === 'home' && (
        <div className={`feed ${sidebar ? '' : 'styles'}`}>
          {dataa.map((item) => (
            <Members key={item.id} item={item} />
          ))}
        </div>
      )}

      {sidebarData === 'history' && (
        <div className="feed2">History</div>
      )}
      {sidebarData === 'liked videos' && (
        <div className="feed2">liked videos</div>
      )}
      {sidebarData === 'downloads' && (
        <div className="feed2">downloads</div>
      )}
      {sidebarData === 'watch later' && (
        <div className="feed2">watch later</div>
      )}
    </>
  )
}

export default Feed
