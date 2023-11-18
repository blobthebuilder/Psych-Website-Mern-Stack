import React from "react";

function AttentionCheckAnswer({ correct, onNext }) {
  return (
    <div className="correctAttentionCheck">
      {correct && (
        <p
          className="instructions"
          id="correctAttentionCheckText">
          Correct
        </p>
      )}
      {!correct && (
        <p
          className="instructions"
          id="incorrectAttentionCheckText">
          Incorrect
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
