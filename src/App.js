import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

function App() {
  // Simple routing logic (you can later use React Router)
  const currentPath = window.location.pathname;

  return (
    <div className="App">
      {currentPath === '/about' ? <About /> : <Home />}
    </div>
  );
}

export default App;
