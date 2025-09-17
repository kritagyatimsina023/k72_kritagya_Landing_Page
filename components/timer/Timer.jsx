'use client';
import React, { useEffect, useState } from 'react';

const Timer = ({ ref }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const nepalTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kathmandu',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(nepalTime);
    };

    updateTime(); // Run immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div>
      <p className="font-[font1] font-bold uppercase text-[1.3em]">
        NEPAL_<span>{time}</span>{' '}
      </p>
    </div>
  );
};

export default Timer;
