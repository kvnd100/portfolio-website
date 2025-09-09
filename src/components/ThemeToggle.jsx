import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/themeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="toggle-container">
        <div className={`toggle-slider ${theme}`}>
          <div className="toggle-icon">
            {theme === 'blue' ? '🔵' : '🟠'}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;