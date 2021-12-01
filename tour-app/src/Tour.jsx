import React, { useEffect, useState } from 'react';
import './index.css';
import Loading from './Loading';

const Tour = () => {
  const [tours, setTours] = useState([]);
  // Loading State for the App goes below
  const [loading, setLoad] = useState(true);

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
    <main className='tours_wrapper'>
      <h1 className='title'>Our Tours</h1>
      <div className='underline'></div>
      {loading
        ? () => <Loading />
        : tours.map((tour) => (
            <div key={tour.id} className='single-tour'>
              <img src={tour.image} alt={tour.name} className='card_img' />
              <div className='single-tour__body'>
                <div className='tour-info'>
                  <h4>{tour.name}</h4>
                  <p className='tour-info'></p>
                  <h4 className='tour-price'>{tour.price}</h4>
                </div>
                <div>
                  <p>
                    {tour.info}
                    <button>Show more</button>
                  </p>

                  <button className='delete-btn'>Not Interested</button>
                </div>
              </div>
            </div>
          ))}
    </main>
  );
};

export default Tour;
