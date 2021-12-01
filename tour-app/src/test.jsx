import React, { useEffect, useState } from 'react';
import './index.css';
import Loading from './Loading';
import Modal from './Modal';

const Tour = () => {
  const [tours, setTours] = useState([]);
  // Loading State for the App goes below
  const [loading, setLoad] = useState(true);
  const [show, setShow] = useState(false);

  const url = 'https://course-api.com/react-tours-project';

  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setLoad(false);
  };

  function truncate(str, n) {
    //Truncate a string to n characters
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  // Runs once when the app loads
  useEffect(() => {
    fetchTours();
  }, []);

  const handleRemove = (id) => {
    setShow(true);
    const newList = tours.filter((tour) => tour.id !== id);
    // alert(`Tour ${id} has been removed`);
    setTours(newList);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <main className='tours-wrapper'>
          <h1 className='title'>Our Tours</h1>
          <div className='underline'></div>
          {tours.map((tour) => (
            <div key={tour.id} className='single-tour'>
              <img
                src={tour.image}
                alt={tour.name}
                className='card_img'
                loading='lazy'
              />
              <div className='single-tour__body'>
                <div className='tour-info'>
                  <h4>{tour.name}</h4>
                  <p className='tour-info'></p>
                  <h4 className='tour-price'>{tour.price}</h4>
                </div>
                <div>
                  <p>
                    {truncate(tour.info, 300)}
                    <button>Show more</button>
                  </p>

                  <button
                    className='delete-btn'
                    onClick={() => handleRemove(tour.id)}>
                    Not Interested
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      )}
      <Modal show={show} onClose={() => setShow(false)} delete={handleRemove} />
    </div>
  );
};
export default Tour;
