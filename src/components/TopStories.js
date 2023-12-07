import React, { useState, useEffect } from 'react';

const TopStories = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        setTopStories(jsonifiedResponse.results)
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