// DirectorsMessage.jsx
import React, { useState } from 'react';
import './DirectorsMessage.css';

export default function DirectorsMessage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="directors-section">
      <div className="directors-container">
        <h2 className="directors-heading">Message from our directors</h2>

        <div className="video-wrapper">
          {!isPlaying ? (
            <div className="video-thumbnail" onClick={handlePlayClick}>
              <img 
                src="https://pixabay.com/photos/student-typing-keyboard-text-849825/" 
                alt="Directors Message"
                className="thumbnail-image"
              />
              <div className="play-button-overlay">
                <button className="play-button" aria-label="Play video">
                  <span className="play-icon">▶</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src="https://pixabay.com/photos/desk-smartphone-iphone-notebook-3076954/"
                title="Message from Directors"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}