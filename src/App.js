import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Models from './pages/Models/Models';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  const currentPath = window.location.pathname;

  return (
    <div className="App">
      {currentPath === '/contact' ? <Contact /> :
       currentPath === '/models' ? <Models /> : 
       currentPath === '/about' ? <About /> : 
       <Home />}
    </div>
  );
}

export default App;
