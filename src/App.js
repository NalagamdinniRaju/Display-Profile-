
import React, { useState, useEffect } from 'react';
import Design1 from './components/Design1';
import Design2 from './components/Design2';
import './styles/App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [activeDesign, setActiveDesign] = useState(1);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const data = await response.json();
      setUserData(data.results[0]);
    };
    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="app">
      <div className="design-switcher">
        <button 
          onClick={() => setActiveDesign(1)}
          className={activeDesign === 1 ? 'active' : ''}
        >
          Design 1
        </button>
        <button 
          onClick={() => setActiveDesign(2)}
          className={activeDesign === 2 ? 'active' : ''}
        >
          Design 2
        </button>
      </div>
      {activeDesign === 1 ? (
        <Design1 userData={userData} />
      ) : (
        <Design2 user={userData} />
      )}
    </div>
  );
}

export default App;