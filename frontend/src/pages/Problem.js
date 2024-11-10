// src/pages/Problem.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Problem() {
  // Example state to represent dynamic content
  const [content, setContent] = useState("The challenge problem itself goes right here.");

  return (
    <div>
      <h1>Problem Page</h1>
      <p>{content}</p>
      <button onClick={() => setContent("Dynamic content updated!")}>
        Click to Update Content
      </button>
      <br />
      <Link to="/result">
      <button class="custom-btn btn-2"><span>Submit</span></button>
      </Link>
    </div>
  );
}

export default Problem;