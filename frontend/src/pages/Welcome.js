// src/pages/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <h1>Welcome to MeetCode</h1>
      <p>A MeetCode a day keeps the social anxiety away</p>
      <Link to="/index">
      <button class="custom-btn btn-5"><span>Log In</span></button>
      </Link>
    </div>
  );
}

export default Welcome;