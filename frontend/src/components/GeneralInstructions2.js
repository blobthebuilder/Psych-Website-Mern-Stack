import React from "react";

function GeneralInstructions2({ onNext, onBack }) {
  return (
    <div className="generalInstructions2">
      <p className="instructions">
        To refine our Smart Traveler tool, we ask that you interact with 3
        versions of the Smart Traveler software and provide evaluations of your
        experiences:
      </p>
      <ul className="instructions">
        <li>
          <strong>Unprogrammed Travel Agent:</strong> One version of the
          software makes generic travel recommendations (i.e., recommendations
          are made at random)
        </li>
        <li>
          <strong>General Travel Agent:</strong> One version makes
          recommendations based on
          <strong>
            personality data from all previous testers, but NOT your own.
          </strong>
        </li>
        <li>
          <strong>Personal Travel Agent:</strong> One version will make
          recommendations based on
          <strong>YOUR own personality questionnaire</strong>, which you will
          complete shortly.
        </li>
      </ul>
      <p className="instructions">
        In other words, after you complete the personality questionnaire, one
        version of Smart Traveler will recommend products
        <strong>you are most likely to endorse.</strong>
      </p>
      <p className="instructions">
        For each version of Smart Traveler, we ask you to view and adjust the
        travel choices to your preferences, and then fill out a questionnaire
        about your experiences using the software. Further detailed instructions
        will be provided throughout.
      </p>
      <button
        type="button"
        onClick={onBack}
        className="button">
        Back
      </button>
      <button
        type="button"
        onClick={onNext}
        className="button">
        Next
      </button>
    </div>
  );
}

export default GeneralInstructions2;
