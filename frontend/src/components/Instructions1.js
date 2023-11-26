import React from "react";

function Instructions1({ onNext, agent }) {
  return (
    <div className="personalAgentInstructions">
      {agent.length === 8 && (
        <>
          <h1>Personal Travel Agent Instructions</h1>
          <p className="instructions">
            Welcome to the <strong>personal travel agent</strong> testing page.
            This version of Smart Traveler has been programmed based on data
            from{" "}
            <strong>
              <u>your</u>
            </strong>{" "}
            responses to the general assessment, and is now able to recommend
            travel choices to you that{" "}
            <strong>
              <u>you</u>
            </strong>{" "}
            are most likely to endorse*.
          </p>
          <p className="instructions">
            *To endorse is to give support. When someone endorses a
            recommendation, it means “Go do this!” So, by{" "}
            <strong>endorse</strong> we mean that the travel choice is one you
            are likely to enjoy.
          </p>
          <p className="instructions">
            To help us refine the Smart Traveler software, you will choose among
            four options provided by the software for each of these travel
            categories. <i>Smart Traveler</i> will provide one AI-generated
            recommendation to aid in your selection.
          </p>
        </>
      )}
      {agent.length === 7 && (
        <>
          <h1>General Travel Agent Instructions</h1>
          <p className="instructions">
            Welcome to the <strong>general travel agent</strong> testing page.
            This version of Smart Traveler has been programmed based on data
            from the personal assessments of{" "}
            <strong>
              <u>all previous users</u>
            </strong>{" "}
            but NOT your own, and is now able to recommend travel choices that{" "}
            <strong>
              <u>previous users</u>
            </strong>{" "}
            are most likely to endorse*.
          </p>
          <p className="instructions">
            *To endorse is to give support. When someone endorses a
            recommendation, it means “Go do this!” So, by{" "}
            <strong>endorse</strong> we mean that the travel choice is one that{" "}
            <strong>
              <u>previous users</u>
            </strong>{" "}
            are likely to enjoy.
          </p>
          <p className="instructions">
            To help us refine the Smart Traveler software, you will choose among
            four options provided by the software for each of these travel
            categories. <i>Smart Traveler</i> will provide one AI-generated
            recommendation to aid in your selection.
          </p>
        </>
      )}
      {agent.length === 12 && (
        <>
          <h1>Unprogrammed Travel Agent Instructions</h1>
          <p className="instructions">
            Welcome to the <strong>unprogrammed travel agent</strong> testing
            page. This version of Smart Traveler has{" "}
            <strong> NOT been programmed</strong> based on data with data from
            users' personal assessments, and recommends travel choices at
            random.
          </p>
          <p className="instructions">
            To help us refine the Smart Traveler software, you will choose among
            four options provided by the software for each of these travel
            categories. <i>Smart Traveler</i> will provide one AI-generated
            recommendation to aid in your selection.
          </p>
        </>
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

export default Instructions1;
