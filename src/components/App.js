import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [curr, setCurr] = useState(0);
  const handleNext = () => {
    if (curr <= 3) {
      let newSlide = curr + 1;
      setCurr(newSlide);
    }
    // setNext(newSlide);
  };
  const handlePrev = () => {
    if (curr > 0) {
      let newSlide = curr - 1;
      setCurr(newSlide);
    }
  };
  const handleRest = () => {
    // let newSlide = curr + 1;
    setCurr(0);
  };
  return (
    <>
      <h1 data-testid="title">{slides[curr].title}</h1>
      <p data-testid="text">{slides[curr].text}</p>
      {curr === 0 ? (
        <button data-testid="button-restart" onClick={handleRest} disabled>
          Restart
        </button>
      ) : (
        <button data-testid="button-restart" onClick={handleRest}>
          Restart
        </button>
      )}
      {curr === 0 ? (
        <button data-testid="button-prev" onClick={handlePrev} disabled>
          Prev
        </button>
      ) : (
        <button data-testid="button-prev" onClick={handlePrev}>
          Prev
        </button>
      )}
      {curr === slides.length - 1 ? (
        <button data-testid="button-next" onClick={handleNext} disabled>
          Next
        </button>
      ) : (
        <button data-testid="button-next" onClick={handleNext}>
          Next
        </button>
      )}
    </>
  );
};

export default App;
// (})
// (}) :}
