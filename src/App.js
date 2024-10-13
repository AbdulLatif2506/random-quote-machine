import React, { useEffect, useState } from "react";
import "./App.css";

const quotes = [
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "That it will never come again is what makes life so sweet.",
    author: "Emily Dickinson",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "Pain is inevitable. Suffering is optional.",
    author: "Haruki Murakami",
  },
  {
    quote: "Be kind, for everyone you meet is fighting a hard battle.",
    author: "Plato",
  },
];

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };
  const getRandomColor = () => {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[randomColorIndex]);
  };

  const handleNewQuote = () => {
    getRandomQuote();
    getRandomColor();
  };

  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
  }, [currentColor]);
  return (
    <div id="wrpper">
    <div id="quote-box">
      <div className="quote-text">
        <i class="fa fa-quote-left" style={{ color: currentColor }}></i>
        <span id="text" style={{ color: currentColor }}>
          {currentQuote.quote}
        </span>
      </div>
      <div className="quote-author">
        <span id="author" style={{ color: currentColor }}>
          - {currentQuote.author}
        </span>
      </div>
      <div className="buttons">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${currentQuote.quote}" - ${currentQuote.author}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: currentColor }}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <button
          id="new-quote"
          onClick={handleNewQuote}
          style={{ backgroundColor: currentColor, color: "white" }}
        >
          New Quote
        </button>
      </div>
      </div>
      <div className="footer">
        <footer>By Abdul Latif</footer>
      </div>
    </div>
  );
}

export default App;
