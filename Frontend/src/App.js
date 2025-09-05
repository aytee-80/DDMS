import logo from './logo.svg';
import './App.css';
import { use } from 'react';
import { useState, useEffect } from 'react';
import Home from './home';
import VoiceToText from './voice';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/voice">Voice to Text</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voice" element={<VoiceToText />} />
      </Routes>
    </Router>
  );
}

export default App;
