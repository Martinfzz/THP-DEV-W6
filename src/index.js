import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Paragraphe from './components/Paragraphe';
import Title from './components/Title';
import Work from './components/Work';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './context/theme';
import { GlobalStyles } from './context/global';
import useDarkMode from './context/useDarkMode';

const App = () => {
  const [theme, buttonTheme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return(
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div>
        <Navbar onClick={toggleTheme} dataTheme={theme} dataButtonTheme={buttonTheme}/>
        <Title />
        <Paragraphe />
        <Work />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
