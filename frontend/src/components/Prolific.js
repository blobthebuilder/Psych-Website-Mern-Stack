import React from "react";

function Prolific({ onNext, onIdChange }) {
  const handleIdChange = (event) => {
    const { value } = event.target;
    onIdChange(value);
  };
  return (
    <div className="landingPage">
      <p className="instructions">Please enter your unique Prolific ID.</p>
      <input
        type="text"
        name="prolificId"
        className="smallTextbox"
        onChange={handleIdChange}
      />
      <button
        type="button"
        className="medButton"
        onClick={onNext}>
        Next
      </button>
    </div>
  );
}

export default Prolific;
