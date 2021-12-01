import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [load, setLoad] = useState(true);

  // Loading State for the App goes below

  const url = 'https://course-api.com/react-tours-project';

  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setLoad(false);
  };

  // Runs once when the app loads
  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div>
      <h1>Our Tours</h1>
      <div className='underline'></div>
      {load
        ? () => <Loading />
        : tours.map((tour) => (
            <div key={tour.id}>
              <img src={tour.image} alt={tour.name} />
              <h1>{tour.name}</h1>
              <p>{tour.description}</p>
              <p>{tour.price}</p>
            </div>
          ))}
    </div>
  );
};

export default Tours;
