import React from "react";

function Question2A({ onNext, onBack }) {
  return (
    <div className="survey">
      <div className="q2A">
        <p className="topMargin">‎</p>
        <h3 className="question">
          Which of the following hotels do you prefer? Select the bubble next to
          the image that best represents your preference.
        </h3>
        <div className="option2">
          <form style={{ paddingBottom: "30px" }}>
            <input
              id="imageAOneBtn"
              type="radio"
              name="imageOne"
            />
            <img
              id="imageAOne"
              width="400"
              alt="Hotel"
            />
          </form>
          <form style={{ paddingBottom: "30px" }}>
            <input
              id="imageATwoBtn"
              type="radio"
              name="imageOne"
            />
            <img
              id="imageATwo"
              width="400"
              alt="Hotel"
            />
          </form>
          <form style={{ paddingBottom: "30px" }}>
            <input
              id="imageAThreeBtn"
              type="radio"
              name="imageOne"
            />
            <img
              id="imageAThree"
              width="400"
              alt="Hotel"
            />
          </form>
          <form style={{ paddingBottom: "30px" }}>
            <input
              id="imageAFourBtn"
              type="radio"
              name="imageOne"
            />
            <img
              id="imageAFour"
              width="400"
              alt="Hotel"
            />
          </form>
          <form style={{ paddingBottom: "30px" }}>
            <input
              id="imageAFiveBtn"
              type="radio"
              name="imageOne"
              value="tropical"
            />
            <img
              id="imageAFive"
              width="400"
              alt="Hotel"
            />
          </form>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="medButton">
          Back
        </button>
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

export default Question2A;
