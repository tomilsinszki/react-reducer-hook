import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
