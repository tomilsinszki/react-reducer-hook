import React, {useState} from 'react';
import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (username : string, password : string) => {
    if (username === '' && password === '') {
      return;
    }

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
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
