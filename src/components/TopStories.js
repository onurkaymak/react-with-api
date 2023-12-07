import React, { useState } from 'react';

const TopStories = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topStories, setTopStories] = useState([]);


  return (
    <h1>Top Stories</h1>
  )
};

export default TopStories;