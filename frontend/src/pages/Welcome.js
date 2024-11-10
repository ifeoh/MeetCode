// src/pages/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <h1>Welcome to the MeetCode App!</h1>
      <p>This is the landing page.</p>
      <Link to="/index">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}

export default Welcome;