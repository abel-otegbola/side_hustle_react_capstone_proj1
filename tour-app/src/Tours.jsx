import React, { useState, useEffect } from 'react';
import './App.css';

const Tours = () => {
  const url = 'https://course-api.com/react-tours-project';

  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <div className=''>
      <header>
        <h2>Our Tours</h2>
      </header>
      <div className='tours'>
        {tours.map((tour) => (
          <div className='tour' key={tour.id}>
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p>{tour.info}</p>
            <p>{tour.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
