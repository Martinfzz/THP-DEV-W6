import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Works from './pages/Works';
import StudyCase from './components/StudyCase';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './context/theme';
import { GlobalStyles } from './context/global';
import useDarkMode from './context/useDarkMode';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

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
      <Router>
      <Navbar onClick={toggleTheme} dataTheme={theme} dataButtonTheme={buttonTheme}/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About/>
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
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
