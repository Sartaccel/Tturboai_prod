// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/mainpage'

function App() {

  return (
    <Router>
      <div className="App">
        <main>
          <MainPage />
        </main>
      </div>
    </Router>
  );
}

export default App;