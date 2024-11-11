import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Problem.css';

function Problem() {
  const [content, setContent] = useState("Consolling a grieving acquaintance");
  const [typedText, setTypedText] = useState(""); // State for letter-by-letter animation
  const [cursorVisible, setCursorVisible] = useState(true); // State to control the cursor blink
  
  const prompt = "You have requested a coffee chat with Alph, a software developer at BlueScreen Inc., your dream company. Alph ran about 10 minutes late, and appears exasperated.";
  const response = "Alph: Sorry, I'm late, things have just been a mess lately.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < prompt.length) {
        setTypedText((prev) => prev + prompt[i]);
        i++;
      } else {
        clearInterval(interval); // Stop when the full text is typed
      }
    }, 20); // Adjust speed for typing animation

    return () => clearInterval(interval);
  }, [prompt]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev); // Toggle cursor visibility
    }, 500); // Cursor blink every 500ms

    return () => clearInterval(cursorInterval);
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
          <p className="prompt-text">
            {typedText} {/* Display the typed prompt text */}
            <br />
            {/* Ensure response is shown without undefined */}
            <span className="alph-name">Alph:</span> Sorry, I'm late, things have just been a mess lately.
          </p>
          <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
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