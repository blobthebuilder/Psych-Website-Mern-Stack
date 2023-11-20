import React from "react";

function AttentionCheck({ onNext, onRadioChange }) {
  const handleRadioChangeLocal = (event) => {
    const { value } = event.target;
    onRadioChange(value); // Call the callback function with the selected value
  };
  return (
    <div className="attentionCheck">
      <p className="instructions">
        (Attention Check): Which travel agent will you be using to answer the
        next set of questions?
      </p>
      <form>
        <div className="vacationContainer">
          <div className="vacationBox">
            <input
              id="personalTravelAgentCheck"
              type="radio"
              name="attentionCheck"
              value="Personal"
              onChange={handleRadioChangeLocal}
            />
            <label
              htmlFor="personalTravelAgentCheck"
              className="labelMargin">
              Personal Travel Agent
            </label>
          </div>
        </div>
        <div className="vacationContainer">
          <div className="vacationBox">
            <input
              id="generalTravelAgentCheck"
              type="radio"
              name="attentionCheck"
              value="General"
              onChange={handleRadioChangeLocal}
            />
            <label
              htmlFor="generalTravelAgentCheck"
              className="labelMargin">
              General Travel Agent
            </label>
          </div>
        </div>
        <div className="vacationContainer">
          <div className="vacationBox">
            <input
              id="controlTravelAgentCheck"
              type="radio"
              name="attentionCheck"
              value="Unprogrammed"
              onChange={handleRadioChangeLocal}
            />
            <label
              htmlFor="controlTravelAgentCheck"
              className="labelMargin">
              Unprogrammed Travel Agent
            </label>
          </div>
        </div>
      </form>
      <button
        type="button"
        onClick={onNext}
        className="button">
        Next
      </button>
    </div>
  );
}

export default AttentionCheck;
