import React from "react";

function PersonalityHeader() {
  return (
    <header className="personalityHeader">
      <h1 className="title">Personality Assessment</h1>
      <p
        id="sub"
        className="instructions header">
        Instructions: This personality assessment will be used to develop your
        personal digital travel agent. Please answer all questions as honestly
        as possible so that your personal travel agent is able to recommend an
        itinerary that{" "}
        <strong>
          <u>you</u> are most likely to endorse.
        </strong>
      </p>
    </header>
  );
}

export default PersonalityHeader;
