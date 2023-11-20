import React from "react";

function Question2C({ onNext, onBack, arr }) {
  const imageOne = arr[0];
  const imageTwo = arr[1];
  const imageThree = arr[2];
  const imageFour = arr[3];
  const imageFive = arr[4];

  const imageOneValue = arr[0].substring(0, arr[0].indexOf("."));
  const imageTwoValue = arr[1].substring(0, arr[0].indexOf("."));
  const imageThreeValue = arr[2].substring(0, arr[0].indexOf("."));
  const imageFourValue = arr[3].substring(0, arr[0].indexOf("."));
  const imageFiveValue = arr[4].substring(0, arr[0].indexOf("."));
  return (
    <div className="survey">
      <div className="q2C">
        <p className="topMargin">‎</p>
        <h3 className="question">
          Which restaurant setting would you most enjoy? Select the bubble next
          to the image that best represents your preference.
        </h3>
        <div className="option2">
          <form>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageCOneBtn"
                type="radio"
                name="imageThree"
                value={imageOneValue}
              />
              <img
                id="imageCOne"
                width="400"
                alt="Restaurant"
                src={`../../Photos/Restaurants/${imageOne}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageCTwoBtn"
                type="radio"
                name="imageThree"
                value={imageTwoValue}
              />
              <img
                id="imageCTwo"
                width="400"
                alt="Restaurant"
                src={`../../Photos/Restaurants/${imageTwo}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageCThreeBtn"
                type="radio"
                name="imageThree"
                value={imageThreeValue}
              />
              <img
                id="imageCThree"
                width="400"
                alt="Restaurant"
                src={`../../Photos/Restaurants/${imageThree}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageCFourBtn"
                type="radio"
                name="imageThree"
                value={imageFourValue}
              />
              <img
                id="imageCFour"
                width="400"
                alt="Restaurant"
                src={`../../Photos/Restaurants/${imageFour}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageCFiveBtn"
                type="radio"
                name="imageThree"
                value={imageFiveValue}
              />
              <img
                id="imageCFive"
                width="400"
                alt="Restaurant"
                src={`../../Photos/Restaurants/${imageFive}`}
              />
            </div>
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

export default Question2C;
