// src/pages/Index.js
import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>This is your dashboard page.</p>
      <Link to="/problem">
        <button>Go to Problem Page</button>
      </Link>
    </div>
  );
}

export default Index;