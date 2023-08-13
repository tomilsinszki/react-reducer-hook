import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // RUNS AFTER EACH COMPONENT RELOAD
  /*
  useEffect(() => {
    console.log('RUNS AFTER EACH COMPONENT RELOAD');
  });
  */

  // ONLY RUNS ONCE AFTER THE FIRST TIME THE COMPONENT WAS LOADED
  // because the dependency array is [] and so the empty array does not change
  /*
  useEffect(() => {
    console.log('ONLY RUNS ONCE AFTER THE FIRST TIME THE COMPONENT WAS LOADED');
  }, []);
  */

  // RUNS AFTER THE FIRST TIME THE COMPONENT WAS LOADED AND AFTER isLoggedIn CHANGES
  /*
  useEffect(() => {
    console.log('RUNS AFTER THE FIRST TIME THE COMPONENT WAS LOADED + WHEN isLoggedIn CHANGES');
  }, [isLoggedIn]);
  */

  /*
  useEffect(() => {
    console.log('RUNS AFTER THE FIRST TIME THE COMPONENT WAS LOADED + WHEN isLoggedIn CHANGES');

    return () => {
      console.log('RUNS BEFORE EACH RELOAD - BUT NOT BEFORE THE ORIGINAL RELOAD')
    };
  }, [isLoggedIn]);
  */

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedIsLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (username : string, password : string) => {
    if (username === '' && password === '') {
      return;
    }

    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '0');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isLoggedIn && <Login loginHandler={loginHandler} />}
        {isLoggedIn && <Home logoutHandler={logoutHandler} />}
      </header>
    </div>
  );
}

export default App;
