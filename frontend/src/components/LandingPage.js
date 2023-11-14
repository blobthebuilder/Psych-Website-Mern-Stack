import React from "react";

function LandingPage({ onNext }) {
  return (
    <div className="landingPage">
      <p className="instructions">
        Welcome to the Smart Traveler beta testing survey. Before beginning the
        survey, please take a minute to review the required consent form.
      </p>
      <button
        type="button"
        className="button"
        onClick={onNext}>
        Next
      </button>
    </div>
  );
}

export default LandingPage;
