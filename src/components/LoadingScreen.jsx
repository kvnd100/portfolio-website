import React, { useState, useEffect } from 'react';
import '../styles/loading.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isComplete ? 'fade-out' : ''}`}>
      <div className="loading-container">
        <div className="tron-grid">
          <div className="grid-lines"></div>
        </div>
        
        <div className="loading-content">
          <div className="tron-logo">
            <div className="logo-ring">
              <div className="logo-inner"></div>
            </div>
          </div>
          
          <div className="loading-text">
            <span className="loading-label">INITIALIZING</span>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>
        
        <div className="scan-line"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;