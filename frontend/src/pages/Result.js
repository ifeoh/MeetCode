import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse'; // To parse CSV
import '../Result.css';

function Result() {
  const [percentage, setPercentage] = useState(0);
  const [response, setResponse] = useState({}); // This will hold the single response

  // Load CSV data for responses
  useEffect(() => {
    Papa.parse('/csv/responses.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        if (result.data.length > 0) {
          setResponse(result.data[0]); // Assuming we only need the first response
        }
      },
    });

    let currentPercentage = 0;
    const interval = setInterval(() => {
      currentPercentage += 1;
      setPercentage(currentPercentage);
      if (currentPercentage >= 85) clearInterval(interval);
    }, 18); // 18ms interval for smooth increase over ~1.5 seconds

    return () => clearInterval(interval);
  }, []);

  const stars = Math.floor(percentage / 33); // 33% per star, 3 stars max

  return (
    <div className="result-page">
      <h1>
        <br />
        <br />
        Success!</h1>
      
      {/* Empathy message inside a rectangle */}
      <div className="empathy-message">
        <p>You were empathetic without being pushy, and gave room for Alph to open up personally.</p>
      </div>

      <div className="star-rating">
        <div className="stars">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < stars ? 'filled' : ''}`}
            >
              &#9733; {/* Star character */}
            </span>
          ))}
        </div>
        <span className="percentage">{percentage}%</span>
      </div>

      {/* Render table from responses.csv */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>Response</th>
            <th>Time</th>
            <th>Sentiment</th>
            <th>Relevance</th>
          </tr>
        </thead>
        <tbody>
          {/* Assuming we are only rendering the first row (response) */}
          <tr>
            <td className="wrap-text">{response.Response}</td>
            <td>{response.Time}</td>
            <td>{response.Sentiment}</td>
            <td>
              {response.Relevance}
            </td>
          </tr>
        </tbody>
      </table>

      <Link to="/welcome">
        <button className="custom-btn btn-2"><span>Back to Dashboard</span></button>
      </Link>
    </div>
  );
}

export default Result;