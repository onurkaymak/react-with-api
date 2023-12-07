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
        console.log(error)
        setError(error)
        setIsLoaded(true)
      });
  }, [])


  if (error) {
    return <h1>Error: {error.message}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <h1>Top Stories</h1>
        <ul>
          {topStories.map((article, index) =>
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.abstract}</p>
            </li>
          )}
        </ul>
      </React.Fragment>
    );
  }

};

export default TopStories;