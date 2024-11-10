// src/pages/Index.js
import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>This is your dashboard page.</p>
      <Link to="/problem">
      <button class="custom-btn btn-4"><span>Go to problem</span></button>
      </Link>
    </div>
  );
}

export default Index;