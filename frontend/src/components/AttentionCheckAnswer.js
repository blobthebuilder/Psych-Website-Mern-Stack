import React from "react";

function AttentionCheckAnswer({ selection, curAgent, onNext }) {
  return (
    <div className="correctAttentionCheck">
      {selection.length === curAgent.length && (
        <p
          className="instructions"
          id="correctAttentionCheckText">
          Correct! You will be using the {curAgent} Travel Agent to answer this
          next set of questions.
        </p>
      )}
      {selection.length !== curAgent.length && (
        <p
          className="instructions"
          id="incorrectAttentionCheckText">
          Incorrect! You will be using the {curAgent} Travel Agent to answer
          this next set of questions.
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

export default AttentionCheckAnswer;
