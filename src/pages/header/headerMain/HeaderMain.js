
import React, { useState, useEffect } from 'react';
import z from './HeaderMain.module.css';

const HeaderMain = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const lines = [
    "Created",
    "By me",
    "With love",
    "For",
    "Son_rra"
  ];

 useEffect(() => {
    const timers = lines.map((line, index) => {
      return setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
      }, index * 1000);
    });

    return () => timers.forEach(timer => clearTimeout(timer)); 
  }, []);

  return (
    <div className={z.main}>
      <div className={z.containerButtons}>
        <button className={z.mainB}>Main</button>
        <button className={z.projects}>Works</button>
        <button className={z.contacts}>Contact me</button>
        <button className={z.footer}>Footer</button>
      </div>
      
     <div className={z.textColumn}>
        {visibleLines.map((line, index) => (
          <div 
            key={index}
            className={z.textLine}
            style={{ 
                 top: `${index * 100}px`,animationDelay: `${index * 0.3}s` }} 
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderMain;