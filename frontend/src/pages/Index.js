import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';

function Index() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('/csv/data.csv')  // Adjust the path to your CSV file in the public directory
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          complete: (result) => {
            // Set the parsed CSV data into state
            setTableData(result.data);
          },
          header: true, // Optional: treat the first row as header
        });
      });
  }, []);

  // Function to determine color for difficulty (Column 4)
  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'easy') return 'mintgreen';  // Cool mint green
    if (difficulty === 'medium') return 'softorange'; // Soft orange
    if (difficulty === 'hard') return 'darkpink';  // Dark pink
    return 'transparent';
  };

  // Function to determine gradient color for Success Rate (Column 5)
  const getSuccessRateColor = (rate) => {
    const percentage = parseFloat(rate);
    return `linear-gradient(to right, green ${percentage}%, yellow ${percentage}%, red 100%)`;
  };

  return (
    <div className="index-page">
      <h1>Welcome, Timothée Chalamet</h1>

      <Link to="/problem" className="table-link">
      </Link>

      {/* Render the 4x12 table with CSV data */}
      <table className="styled-table">
        <thead>
          <tr>
            {/* Create table headers dynamically from CSV data */}
            {tableData[0] &&
              Object.keys(tableData[0]).map((columnName, index) => (
                <th key={index}>{columnName}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {/* Render the table rows dynamically */}
          {tableData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'dark-row' : 'medium-row'}
            >
              {Object.values(row).map((cell, colIndex) => {
                // Apply special styling for Column 4 (Difficulty) and Success Rate
                let cellStyle = {};
                let content = cell;
                // Wrap first row in Column 2 with a link to the Problem Page
                if (rowIndex === 0 && colIndex === 1) {
                  content = <Link to="/problem">{cell}</Link>;
                }
                if (colIndex === 3) { // Column 4 (Difficulty)
                  cellStyle = { backgroundColor: getDifficultyColor(cell) };
                } else if (colIndex === 4) { // Success Rate Column
                  cellStyle = { background: getSuccessRateColor(cell) };
                }

                return (
                  <td
                    key={colIndex}
                    className={colIndex === 1 ? 'hoverable' : ''}
                    style={cellStyle}
                  >
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;