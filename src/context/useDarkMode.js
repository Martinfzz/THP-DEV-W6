import { useEffect, useState } from 'react';

const useDarkMode = () => {

  const [theme, setTheme] = useState('light');
  const [buttonTheme, setButtonTheme] = useState('success');
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };
  const setButtonMode = mode => {
    window.localStorage.setItem('buttonTheme', mode)
    setButtonTheme(mode)
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark')
      setButtonMode('danger')
    } else {
      setMode('light')
      setButtonMode('success')
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
      setMode('dark') :
      localTheme ?
        setTheme(localTheme) :
        setMode('light');
    setComponentMounted(true);
    const localButtonTheme = window.localStorage.getItem('buttonTheme');
    localButtonTheme && setButtonTheme(localButtonTheme);
  }, []);

  return [theme, buttonTheme, toggleTheme, componentMounted]
}

export default useDarkMode;
