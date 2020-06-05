import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() { 
  const handleTest = () => {
    axios.get('/test').then(res => console.log(res))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleTest}>
          test server
        </button>
        <h2>Updated!</h2>
        <a>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
