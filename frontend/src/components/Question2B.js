import React from "react";

function Question2B({ onNext, onBack }) {
  return (
    <div className="survey">
      <div className="q2B">
        <p className="topMargin">‎</p>
        <h3 className="question">
          Where would you most like to spend an afternoon? Select the bubble
          next to the image that best represents your preference.
        </h3>
        <div className="option2">
          <form style={{ paddingBottom: "30px" }}>
            <input
              id="imageBOneBtn"
              type="radio"
              name="imageTwo"
            />
            <img
              id="imageBOne"
              width="400"
              height="320"
              alt="Afternoon"
            />
          </form>
          <form style={{ paddingBottom: "30px" }}>
            <input
              id="imageBTwoBtn"
              type="radio"
              name="imageTwo"
            />
            <img
              id="imageBTwo"
              width="400"
              height="320"
              alt="Afternoon"
            />
          </form>
          <form style={{ paddingBottom: "30px" }}>
            <input
              id="imageBThreeBtn"
              type="radio"
              name="imageTwo"
            />
            <img
              id="imageBThree"
              width="400"
              height="320"
              alt="Afternoon"
            />
          </form>
          <form style={{ paddingBottom: "30px" }}>
            <input
              id="imageBFourBtn"
              type="radio"
              name="imageTwo"
            />
            <img
              id="imageBFour"
              width="400"
              height="320"
              alt="Afternoon"
            />
          </form>
          <form style={{ paddingBottom: "30px" }}>
            <input
              id="imageBFiveBtn"
              type="radio"
              name="imageTwo"
            />
            <img
              id="imageBFive"
              width="400"
              height="320"
              alt="Afternoon"
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

export default Question2B;
