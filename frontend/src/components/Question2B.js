import React from "react";

function Question2B({ onNext, onBack, arr, onAfternoonChange }) {
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

  const handleAfternoonChange = (event) => {
    const { value } = event.target;
    onAfternoonChange(value);
  };

  return (
    <div className="survey">
      <div className="q2B">
        <p className="topMargin">‎</p>
        <h3 className="question">
          Where would you most like to spend an afternoon? Select the bubble
          next to the image that best represents your preference.
        </h3>
        <div className="option2">
          <form>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageBOneBtn"
                type="radio"
                name="imageTwo"
                value={imageOneValue}
                onChange={handleAfternoonChange}
              />
              <img
                id="imageBOne"
                width="400"
                height="320"
                alt="Afternoon"
                src={`../../Photos/Afternoon/${imageOne}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageBTwoBtn"
                type="radio"
                name="imageTwo"
                value={imageTwoValue}
                onChange={handleAfternoonChange}
              />
              <img
                id="imageBTwo"
                width="400"
                height="320"
                alt="Afternoon"
                src={`../../Photos/Afternoon/${imageTwo}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageBThreeBtn"
                type="radio"
                name="imageTwo"
                value={imageThreeValue}
                onChange={handleAfternoonChange}
              />
              <img
                id="imageBThree"
                width="400"
                height="320"
                alt="Afternoon"
                src={`../../Photos/Afternoon/${imageThree}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageBFourBtn"
                type="radio"
                name="imageTwo"
                value={imageFourValue}
                onChange={handleAfternoonChange}
              />
              <img
                id="imageBFour"
                width="400"
                height="320"
                alt="Afternoon"
                src={`../../Photos/Afternoon/${imageFour}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageBFiveBtn"
                type="radio"
                name="imageTwo"
                value={imageFiveValue}
                onChange={handleAfternoonChange}
              />
              <img
                id="imageBFive"
                width="400"
                height="320"
                alt="Afternoon"
                src={`../../Photos/Afternoon/${imageFive}`}
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

export default Question2B;
