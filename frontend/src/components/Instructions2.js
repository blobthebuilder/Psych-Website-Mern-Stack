import React from "react";

function Instructions2({ onNext, agent }) {
  return (
    <div className="personalAgentInstructions2">
      {agent.length === 8 && (
        <p className="instructions">
          On the following pages, you will see a list of 18 travel categories
          with 4 options each, to assist you in planning an itinerary for
          Madrid. For each category, your <strong>personal travel agent</strong>{" "}
          has made recommendations for the selection it recommends{" "}
          <strong>based on your personality assessment.</strong> The choices
          recommended by your personal agent will be preselected for you and
          will appear next to an icon that says “recommended.”
        </p>
      )}
      {agent.length === 7 && (
        <p className="instructions">
          On the following pages, you will see a list of 18 travel categories
          with 4 options each, to assist you in planning an itinerary for
          Madrid. For each category, the <strong>general travel agent</strong>{" "}
          has made recommendations for the selection it recommends{" "}
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
          On the following pages, you will see a list of 18 travel categories
          with 4 options each, to assist you in planning an itinerary for
          Madrid. For each category, the{" "}
          <strong>unprogrammed travel agent</strong> has made recommendations
          for the selection it recommends. The choices recommended by the
          unprogrammed agent will be preselected for you and will appear next to
          an icon that says “recommended.”
        </p>
      )}
      <p className="instructions">
        The image below shows an example of the selection recommended for one
        travel category.
      </p>
      <div>
        <img
          src="../../Photos/itineraryScreenshot.png"
          width="600px"
          alt="Example"
        />
      </div>

      {agent.length === 8 && (
        <p className="instructions">
          To help us refine the Smart Traveler software, you will choose among
          four options provided by the software for each of these travel
          categories. <i>Smart Traveler</i> will provide one AI-generated
          recommendation to aid in your selection.
        </p>
      )}
      {agent.length === 7 && (
        <p className="instructions">
          To help us refine the Smart Traveler software, you will choose among
          four options provided by the software for each of these travel
          categories. <i>Smart Traveler</i> will provide one AI-generated
          recommendation to aid in your selection.
        </p>
      )}
      {agent.length === 12 && (
        <p className="instructions">
          To help us refine the Smart Traveler software, you will choose among
          four options provided by the software for each of these travel
          categories. <i>Smart Traveler</i> will provide one AI-generated
          recommendation to aid in your selection.
        </p>
      )}
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
