// src/pages/Result.js
import React from 'react';
import { Link } from 'react-router-dom';

function Result() {
  return (
    <div>
      <h1>Result Page</h1>
      <p>This is the result page, where you can see your final outcome.</p>
      <Link to="/welcome">
        <button>Go Back to Welcome Page</button>
      </Link>
    </div>
  );
}

export default Result;