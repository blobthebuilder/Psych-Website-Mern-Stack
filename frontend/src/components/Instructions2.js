import React from "react";

function Instructions2({ onNext }) {
  return (
    <div className="personalAgentInstructions2">
      <p className="instructions">
        On the following pages, you will see a list of 25 travel categories with
        4 options each. For each category, your
        <strong>personal travel agent</strong> has made recommendations for the
        selection it recommends
        <strong>based on your personality assessment.</strong> The choices
        recommended by your personal agent will be preselected for you and will
        appear next to an icon that says “recommended.”
      </p>
      <div>
        <img
          src="../../public/Photos/itineraryScreenshot.png"
          width="600px"
          alt="Example"
        />
      </div>

      <button
        type="button"
        onClick={onNext}
        className="button">
        Next
      </button>
    </div>
  );
}

export default Instructions2;
