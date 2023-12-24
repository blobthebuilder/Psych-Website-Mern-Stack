import React from "react";

function Experiences({ onNext, onExperienceChange }) {
  const handleExperienceChange = (event) => {
    const { value } = event.target;
    onExperienceChange(value);
  };
  return (
    <div className="survey">
      <div className="demographics">
        <p className="instructions">
          We are still working to improve the survey. Is there anything that you
          would like to mention about your experience?
        </p>
        <div className="vacationContainer">
          <div className="vacationBox">
            <label
              htmlFor="experience"
              className="labelMargin">
              Feedback:
            </label>
            <input
              id="experience"
              type="text"
              name="experience"
              className="smallTextbox"
              onChange={handleExperienceChange}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onNext}
          className="medButton">
          Next
        </button>
      </div>
    </div>
  );
}

export default Experiences;
