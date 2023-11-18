import React from "react";

function GeneralInstructions1({ onNext }) {
  return (
    <div className="generalInstructions1">
      <p className="instructions">
        Thank you for participating in the Smart Traveler beta testing survey.
      </p>
      <p className="instructions">
        You will be testing a new virtual travel agent tool,
        <i>Smart Traveler</i>. The Smart Traveler technology uses artificial
        intelligence (AI) to make travel recommendations.
        <i>Smart Traveler</i> has been designed to help make planning for
        upcoming trips easier by providing recommendations for your choice of
        flights, hotels, transportation, restaurants, sightseeing, and
        activities.
      </p>
      <button
        type="button"
        onClick={onNext}
        className="button">
        Next
      </button>
    </div>
  );
}

export default GeneralInstructions1;
