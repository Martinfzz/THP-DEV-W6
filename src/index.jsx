import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Works from './pages/Works';
import StudyCase from './components/StudyCase';
import { lightTheme, darkTheme } from './context/theme';
import { GlobalStyles } from './context/global';
import useDarkMode from './context/useDarkMode';

const App = () => {
  // Call the dark mode
  const [theme, buttonTheme, toggleTheme, componentMounted] = useDarkMode();
  // Toggle the mode
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // If the componenet is not mounted we display nothing
  if (!componentMounted) {
    return null;
  }

  // If it's mounted we display everything with the mode selected
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div>
        <Router>
          <Navbar onClick={toggleTheme} dataTheme={theme} dataButtonTheme={buttonTheme} />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/works" exact>
                <Works />
              </Route>
              <Route path="/works/:worksSlug">
                <StudyCase />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
