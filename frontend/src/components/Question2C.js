import React from "react";

function Question2C({ onNext, onBack }) {
  return (
    <div className="q2C">
      <p className="topMargin">‎</p>
      <h3 className="question">
        Which restaurant setting would you most enjoy? Select the bubble next to
        the image that best represents your preference.
      </h3>
      <div className="option2">
        <form style={{ paddingBottom: "30px" }}>
          <input
            id="imageCOneBtn"
            type="radio"
            name="imageThree"
          />
          <img
            id="imageCOne"
            width="400"
            alt="Restaurant"
          />
        </form>
        <form style={{ paddingBottom: "30px" }}>
          <input
            id="imageCTwoBtn"
            type="radio"
            name="imageThree"
          />
          <img
            id="imageCTwo"
            width="400"
            alt="Restaurant"
          />
        </form>
        <form style={{ paddingBottom: "30px" }}>
          <input
            id="imageCThreeBtn"
            type="radio"
            name="imageThree"
          />
          <img
            id="imageCThree"
            width="400"
            alt="Restaurant"
          />
        </form>
        <form style={{ paddingBottom: "30px" }}>
          <input
            id="imageCFourBtn"
            type="radio"
            name="imageThree"
          />
          <img
            id="imageCFour"
            width="400"
            alt="Restaurant"
          />
        </form>
        <form style={{ paddingBottom: "30px" }}>
          <input
            id="imageCFiveBtn"
            type="radio"
            name="imageThree"
          />
          <img
            id="imageCFive"
            width="400"
            alt="Restaurant"
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
  );
}

export default Question2C;
