import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome-page">
      {/* Render robot image directly with absolute path */}
      <img 
        src="/images/robot.png" 
        alt="Robot" 
        className="robot-image" 
        style={{ width: '30%', height: 'auto', objectFit: 'contain' }} 
      />

      {/* Main content */}
      <h1>Welcome to MeetCode</h1>
      <p>A MeetCode a day keeps the social anxiety away</p>
      <Link to="/index">
        <button className="custom-btn btn-2"><span>Log In</span></button>
      </Link>
    </div>
  );
}

export default Welcome;