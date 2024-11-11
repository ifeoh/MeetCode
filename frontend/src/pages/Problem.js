import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Problem.css';

function Problem() {
  const [content, setContent] = useState("Consolling a grieving acquaintance");
  const [isVisible, setIsVisible] = useState(false); // State for fade-in effect
  
  const prompt = "You have requested a coffee chat with Alph, a software developer at BlueScreen Inc., your dream company. Alph ran about 10 minutes late, and appears exasperated.";
  const response = "Alph: Sorry, I'm late, things have just been a mess lately.";

  useEffect(() => {
    // Trigger the fade-in effect after a slight delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, []);

  // Handle the input change for the chat bar
  const [message, setMessage] = useState("");
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="problem-page">
      <h1>Problem 01</h1>
      <p>{content}</p>

      {/* Image */}
      <img
        src="/images/coffee-chat.png"
        alt="Coffee chat"
        className="problem-image"
      />
      
      {/* Overlay container for the prompt, response, and chat bar */}
      <div className="overlay-container">
        <div className="prompt-container">
          {/* Fade-in effect */}
          <p className={`prompt-text ${isVisible ? 'fade-in' : ''}`}>
            {prompt} {/* Display the entire prompt */}
            <br /> {/* Break between the prompt and Alph's words */}
            <span className="alph-name"><br /> Alph:</span> Sorry, I'm late, things have just been a mess lately.
          </p>
        </div>

        {/* Chat bar and Submit button on the same line */}
        <div className="chat-bar-container">
          <div className="chat-bar">
            <input
              type="text"
              value={message}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="chat-input"
            />
          </div>

          <Link to="/result">
            <button className="custom-btn btn-2">
              <span>Submit</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Problem;