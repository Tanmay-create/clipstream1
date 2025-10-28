import React, { useEffect, useState } from 'react';
import Recommendationsvideo from './Recommendationsvideo';
import '../css/Recommendations.css';
import { API_KEY } from '../data';

const Recommendations = () => {
  const [recommend, setRecommend] = useState([]);

  const recommendation = async () => {
    try {
      const api_fetch = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`
      );
      const data = await api_fetch.json();
      setRecommend(data.items || []);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  useEffect(() => {
    recommendation();
  }, []);

  return (
    <div className="recommendations">
      {recommend.length > 0 ? (
        recommend.map((item, index) => (
          <Recommendationsvideo key={index} item={item} />
        ))
      ) : (
        <p>Loading recommendations...</p>
      )}
    </div>
  );
};

export default Recommendations;
