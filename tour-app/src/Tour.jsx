import React, { useEffect, useState } from 'react';
import './index.css';
import Loading from './Loading';
// import Modal from './Modal';

const Tour = () => {
  const [tours, setTours] = useState([]);
  // Loading State for the App goes below
  const [loading, setLoad] = useState(true);
  const [show, setShow] = useState('Show more');
  const [truncPara, setTruncPara] = useState({});

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
    setShowModal(true);
    // if()
    const newList = tours.filter((tour) => tour.id !== id);
    // alert(`Tour ${id} has been removed`);
    setTours(newList);
  };

  const handleRefresh = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  const handleShowMore = (id) => {
    if (show === 'Show more') {
      const fullPara = tours.filter((tour) => tour.id === id)[0].info;
      setShow('Show less');
      setTruncPara({ id, info: fullPara });
    } else {
      const fullPara = truncate(
        tours.filter((tour) => tour.id === id)[0].info,
        300
      );
      setShow('Show more');
      setTruncPara({ id, info: fullPara });
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : tours.length !== 0 ? (
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
              <div
                className='single-tour__body'
                onClick={() => handleShowMore(tour.id)}>
                <div className='tour-info'>
                  <h4>{tour.name}</h4>
                  <p className='tour-info'></p>
                  <h4 className='tour-price'>{tour.price}</h4>
                </div>
                <div>
                  <p>
                    {truncPara.id === tour.id
                      ? truncPara.info
                      : truncate(tour.info, 300)}
                    <button>
                      {truncPara.id === tour.id ? show : 'Show More'}
                    </button>
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
      ) : (
        <div className='reload'>
          <h3>No more tours remaining</h3>
          <button onClick={() => handleRefresh()}>Refresh</button>
        </div>
      )}
      )
    </div>
  );
};
export default Tour;
