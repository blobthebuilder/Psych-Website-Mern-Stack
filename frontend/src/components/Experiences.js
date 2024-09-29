import React from "react";

function Experiences({ onNext, onExperienceChange, onAccuracyChange}) {
  const handleExperienceChange = (event) => {
    const { value } = event.target;
    onExperienceChange(value);
  };
  const handleAccuracyChange = (event) => {
    const { value } = event.target;
    onAccuracyChange(value);
  }
  return (
    <div className="survey">
      <div className="demographics">
        <p className="instructions">
          Please indicate how much you agree or disagree with the following
          statement: I filled out the personality assessment accurately based on
          my true preferences and personal information. Note that this
          information will only help us to understand how people engage with
          these digital travel agents, and will not impact your compensation or
          status with Prolific. Please be honest!
        </p>
        <div className="vacationBox">
            <input
              id="accuracyBtn1"
              type="radio"
              name="accuracy"
              value="Strongly disagree"
              onChange={handleAccuracyChange}
            />
            <label
              htmlFor="accuracyBtn1"
              className="labelMargin">
              Strongly disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="accuracyBtn2"
              type="radio"
              name="accuracy"
              value="Disagree"
              onChange={handleAccuracyChange}
            />
            <label
              htmlFor="accuracyBtn2"
              className="labelMargin">
              Disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="accuracyBtn3"
              type="radio"
              name="accuracy"
              value="Somewhat disagree"
              onChange={handleAccuracyChange}
            />
            <label
              htmlFor="accuracyBtn3"
              className="labelMargin">
              Somewhat disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="accuracyBtn4"
              type="radio"
              name="accuracy"
              value="Neither agree nor disagree"
              onChange={handleAccuracyChange}
            />
            <label
              htmlFor="accuracyBtn4"
              className="labelMargin">
              Neither agree nor disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="accuracyBtn5"
              type="radio"
              name="accuracy"
              value="Somewhat agree"
              onChange={handleAccuracyChange}
            />
            <label
              htmlFor="accuracyBtn5"
              className="labelMargin">
              Somewhat agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="accuracyBtn6"
              type="radio"
              name="accuracy"
              value="Agree"
              onChange={handleAccuracyChange}
            />
            <label
              htmlFor="accuracyBtn6"
              className="labelMargin">
              Agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="accuracyBtn7"
              type="radio"
              name="accuracy"
              value="Strongly agree"
              onChange={handleAccuracyChange}
            />
            <label
              htmlFor="accuracyBtn7"
              className="labelMargin">
              Strongly agree
            </label>
          </div>
        <p className="instructions">
          We are still working to improve the survey. Is there anything that you
          would like to mention about your experience?
        </p>
        <div className="vacationContainer">
          <div className="vacationBox">
            <label htmlFor="experience" className="labelMargin">
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
        <button type="button" onClick={onNext} className="medButton">
          Next
        </button>
      </div>
    </div>
  );
}

export default Experiences;
