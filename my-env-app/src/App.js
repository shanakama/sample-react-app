import React from 'react';
import './App.css';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Environment Variable Example</h1>
        <p>The API URL is: {apiUrl}</p>
      </header>
    </div>
  );
}

export default App;
