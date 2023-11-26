import React from "react";

function Instructions2({ onNext, agent }) {
  return (
    <div className="personalAgentInstructions2">
      {agent.length === 8 && (
        <p className="instructions">
          On the following pages, you will see a list of 25 travel categories
          with 4 options each. For each category, your{" "}
          <strong>personal travel agent</strong> has made recommendations for
          the selection it recommends{" "}
          <strong>based on your personality assessment.</strong> The choices
          recommended by your personal agent will be preselected for you and
          will appear next to an icon that says “recommended.”
        </p>
      )}
      {agent.length === 7 && (
        <p className="instructions">
          On the following pages, you will see a list of 25 travel categories
          with 4 options each. For each category, the{" "}
          <strong>general travel agent</strong> has made recommendations for the
          selection it recommends{" "}
          <strong>
            based on the personality assessments of previous users (not your
            own).{" "}
          </strong>
          The choices recommended by the general agent will be preselected for
          you and will appear next to an icon that says “recommended.”
        </p>
      )}
      {agent.length === 12 && (
        <p className="instructions">
          On the following pages, you will see a list of 25 travel categories
          with 4 options each. For each category, your{" "}
          <strong>unprogrammed travel agent</strong> has made recommendations
          for the selection it recommends. The choices recommended by the
          unprogrammed agent will be preselected for you and will appear next to
          an icon that says “recommended.”
        </p>
      )}
      <div>
        <img
          src="../../Photos/itineraryScreenshot.png"
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
