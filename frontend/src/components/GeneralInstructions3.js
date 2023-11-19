import React from "react";

function GeneralInstructions3({ onNext, onBack }) {
  return (
    <div className="generalInstructions3">
      <p className="instructions">
        To fill out your personality questionnaire so that Smart Traveler can
        create an algorithm that recommends products/services you are most
        likely to endorse, please press “Next.”
      </p>
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

export default GeneralInstructions3;
