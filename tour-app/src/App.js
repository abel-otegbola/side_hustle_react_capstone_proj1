import React, { useState } from 'react';
import './App.css';
import Tours from './Tours';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className='App'>
      <Tours />
    </div>
  );
}

export default App;
