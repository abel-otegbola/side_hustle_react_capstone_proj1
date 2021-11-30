import React from 'react';
import './App.css';
import Tours from './Tours';

function App() {
  return (
    <div className='App'>
      {/* We need to implement a conditional rendering 'Loading....' state based on if the app is loading the data from the API */}
      <Tours />
    </div>
  );
}

export default App;
