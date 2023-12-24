import React from "react";

function Introduction({ onNext, onBack }) {
  return (
    <div className="introduction">
      <h1 className="title">Personality Assessment</h1>
      <p className="instructions">
        Instructions: This personality assessment will be used to develop your
        personal digital travel agent. Please answer all questions as honestly
        as possible so that your personal travel agent is able to recommend an
        itinerary for your trip to Madrid that{" "}
        <strong>
          <u>you</u> are most likely to endorse.
        </strong>
      </p>
      <button
        type="button"
        onClick={onNext}
        className="button">
        Start
      </button>
    </div>
  );
}

export default Introduction;
