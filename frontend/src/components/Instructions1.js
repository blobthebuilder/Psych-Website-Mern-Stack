import React from "react";

function Instructions1({ onNext }) {
  return (
    <div className="personalAgentInstructions">
      <h1>Personal Travel Agent Instructions</h1>
      <p className="instructions">
        Welcome to the <strong>personal travel agent</strong> testing page. This
        version of Smart Traveler has been programmed based on data from
        <strong>
          <u>your</u>
        </strong>{" "}
        responses to the personal assessment, and is now able to recommend
        travel choices to you that
        <strong>
          <u>you</u>
        </strong>{" "}
        are most likely to endorse*.
      </p>
      <p className="instructions">
        *To endorse is to give support. When someone endorses a recommendation,
        it means “Go do this!” So, by <strong>endorse</strong> we mean that the
        travel choice is one you are likely to enjoy.
      </p>
      <p className="instructions">
        To help us refine the Smart Traveler software, you will choose among
        four options provided by the software for each of these travel
        categories. <i>Smart Traveler</i> will provide one AI-generated
        recommendation to aid in your selection.
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

export default Instructions1;
