import React from "react";

function GeneralInstructions4({ onNext, onBack }) {
  return (
    <div className="generalInstructions3">
      <p className="instructions">
        Please imagine that you are booking a trip to Madrid, Spain, and that
        you are using the Smart Traveler AI tool to make travel decisions.
      </p>
      <p className="instructions">
        For each version of Smart Traveler, we ask you to view and adjust the
        travel choices to your preferences, and then fill out a questionnaire
        about your experiences using the software. Further detailed instructions
        will be provided throughout.
      </p>
      <p className="instructions"></p>
      <button
        type="button"
        onClick={onBack}
        className="button">
        Back
      </button>
      <button
        style={{ marginLeft: "7px" }}
        type="button"
        onClick={onNext}
        className="button">
        Next
      </button>
    </div>
  );
}

export default GeneralInstructions4;
