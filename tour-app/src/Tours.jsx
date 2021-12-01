import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';

const Tours = () => {
  const [tours, setTours] = useState([]);
  // Loading State for the App goes below
  const [load, setLoad] = useState(true);

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
            <div key={tour.id} className='single-tour'>
              <img src={tour.image} alt={tour.name} className='tour_img' />
              <div className='single-tour__body'>
                <div className='tour-info'>
                  <h4>{tour.name}</h4>
                  <h4 className='tour-price'>{tour.price}</h4>
                </div>
                <div className='footer'>
                  <p className='tour_info'>{tour.info}</p>
                  <button className='delete-btn'>Not Interested</button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Tours;
