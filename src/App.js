import './App.css';

import "./theme/theme-variables.styles.js"

import {ThemeProvider} from 'styled-components';

import FullBody from './components/full-body/full-body.component';
import Header from './components/header/header.component';

import { darkTheme, lightTheme } from './theme/theme-variables.styles.js';
import { useState, createContext } from 'react';


export const AuthContext = createContext();

const App = () => {
  
  const [theme, setTheme] = useState( 'dark'
    // JSON.parse(localStorage.getItem("theme")) || "light"
  );
  
  const isDarkTheme = theme === 'dark';
  
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  }

  // useEffect(() => {
  //   localStorage.setItem("theme", JSON.stringify(theme));
  // }, [theme]);


  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AuthContext.Provider value={toggleTheme}>
        <div className='body'>
          <Header/>
          <FullBody/>
        </div>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
