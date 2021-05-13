/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';

// We will set the dark mode informations
const useDarkMode = () => {
  const [theme, setTheme] = useState('light'); // Whitch theme ?
  const [buttonTheme, setButtonTheme] = useState('success'); // Whitch button theme ?
  // Use to see if the componenet is mounted to display the informations
  const [componentMounted, setComponentMounted] = useState(false);

  // We set the mode for the theme and the button into the local storage
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const setButtonMode = (mode) => {
    window.localStorage.setItem('buttonTheme', mode);
    setButtonTheme(mode);
  };

  // Toggle between dark and light mode
  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
      setButtonMode('danger');
    } else {
      setMode('light');
      setButtonMode('success');
    }
  };

  // We set the theme each time something change
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
      ? setMode('dark')
      : localTheme
        ? setTheme(localTheme)
        : setMode('light');
    setComponentMounted(true);
    const localButtonTheme = window.localStorage.getItem('buttonTheme');
    localButtonTheme && setButtonTheme(localButtonTheme);
  }, []);

  return [theme, buttonTheme, toggleTheme, componentMounted];
};

export default useDarkMode;
