// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Index from './pages/Index';
import Problem from './pages/Problem';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/index" element={<Index />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/result" element={<Result />} />
        <Route path="/" element={<Welcome />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
