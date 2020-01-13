import React from 'react';
import logo from './assets/logo.png';
import dartWader from './assets/dart-wader.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />
      </header>
      <footer>
      <img src={dartWader}  alt="logo" />
      </footer>
    </div>
  );
}

export default App;
