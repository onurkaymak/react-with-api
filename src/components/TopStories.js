import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TopStories = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setTopStories(response.data.results)
        setIsLoaded(true)
      })
      .catch((error) => {
        setError(error)
        setIsLoaded(true)
      });
  }, [])


  return (
    <h1>Top Stories</h1>
  )
};

export default TopStories;