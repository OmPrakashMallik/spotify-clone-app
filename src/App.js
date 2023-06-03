import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(()=> {
    const token = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(token) {
      setToken(_token)
    }

    console.log("I HAVE A TOKEN>>>", token);
  }, []);

  return (
    // BEM
    <div className="app"> 
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
        )
      }
      <Login/>
    </div>

  );
}

export default App;

//ANOTHER COMMENT