import React, { useState, useEffect } from 'react';
import './NavBar.css';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const getTimeInToronto = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/America/Toronto');
        const data = await response.json();
        const time = new Date(data.datetime).toLocaleTimeString();
        setCurrentTime(time);
      } catch (error) {
        console.error('Error fetching time:', error);
      }
    };

    getTimeInToronto();

    const interval = setInterval(() => {
      getTimeInToronto();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeString) => {
    // Removing 'AM' or 'PM' from the time string
    return timeString.replace(/\s(?:AM|PM)/, '');
  };

  return (
    <div>
      <p className='text-uppercase time-menu'>Toronto, {formatTime(currentTime)}</p>
    </div>
  );
};

export default TimeDisplay;
