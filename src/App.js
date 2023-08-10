import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div id='root'>
        
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
