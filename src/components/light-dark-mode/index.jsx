import React from 'react';
import './theme.css';
import useLocalStorage from './hooks/useLocalStorage';

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const handleToogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h3>Hello World!</h3>
        <button onClick={handleToogleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
