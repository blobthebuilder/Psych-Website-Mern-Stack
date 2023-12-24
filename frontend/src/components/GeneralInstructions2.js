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
          <strong>Unprogrammed Travel Agent:</strong> This version of the
          software makes generic travel recommendations (i.e., recommendations
          are made at random)
        </li>
        <li>
          <strong>General Travel Agent:</strong> This version makes
          recommendations based on{" "}
          <strong>
            personality data from all previous testers, but NOT your own.
          </strong>
        </li>
        <li>
          <strong>Personal Travel Agent:</strong> This version will make
          recommendations based on{" "}
          <strong>YOUR own personality questionnaire</strong>, which you will
          complete shortly.
        </li>
      </ul>
      <p className="instructions">
        In other words, after you complete the personality questionnaire,{" "}
        <u>the personal travel agent</u> version of Smart Traveler will
        recommend products <strong>you are most likely to endorse.</strong>
      </p>
      <p className="instructions">
        *To endorse is to give support. When someone endorses a recommendation,
        it means “Go do this!” So, by <strong>endorse</strong> we mean that the
        travel choice is one you are likely to enjoy.
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

export default GeneralInstructions2;
