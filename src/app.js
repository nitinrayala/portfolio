import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Projects from './pages/projects';
import './app.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;