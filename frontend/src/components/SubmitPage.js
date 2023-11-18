import React from "react";

function SubmitPage({ onNext }) {
  return (
    <div className="submitPage">
      <p className="instructions">
        Thank you for completing the personal assessment. This information will
        be utilized to create a personal travel agent that is able to recommend
        products that <strong>YOU</strong> are most likely to endorse.
      </p>
      <button
        type="button"
        onClick={onNext}
        className="button">
        Submit
      </button>
    </div>
  );
}

export default SubmitPage;
