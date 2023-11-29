import React from "react";

function AlgorithmAwareness({
  onNext,
  onAlexaChange,
  onTVChange,
  onWearableChange,
  onBrowserChange,
  onPaymentChange,
  onTowersChange,
  onGamesChange,
  onRadiosChange,
  onForecastChange,
  onRecommendationChange,
  onNewsChange,
  onAdvertisementChange,
}) {
  const handleAlexaChange = (event) => {
    const { value } = event.target;
    onAlexaChange(value);
  };
  const handleTVChange = (event) => {
    const { value } = event.target;
    onTVChange(value);
  };
  const handleWearableChange = (event) => {
    const { value } = event.target;
    onWearableChange(value);
  };
  const handleBrowserChange = (event) => {
    const { value } = event.target;
    onBrowserChange(value);
  };
  const handlePaymentChange = (event) => {
    const { value } = event.target;
    onPaymentChange(value);
  };
  const handleTowersChange = (event) => {
    const { value } = event.target;
    onTowersChange(value);
  };
  const handleGamesChange = (event) => {
    const { value } = event.target;
    onGamesChange(value);
  };
  const handleRadiosChange = (event) => {
    const { value } = event.target;
    onRadiosChange(value);
  };
  const handleForecastChange = (event) => {
    const { value } = event.target;
    onForecastChange(value);
  };
  const handleRecommendationChange = (event) => {
    const { value } = event.target;
    onRecommendationChange(value);
  };
  const handleNewsChange = (event) => {
    const { value } = event.target;
    onNewsChange(value);
  };
  const handleAdvertisementChange = (event) => {
    const { value } = event.target;
    onAdvertisementChange(value);
  };
  return (
    <div className="algorithmAwareness">
      <p className="topMargin">‎</p>
      <p className="postInstructions">
        Please answer the following questions about algorithms in general{" "}
        <strong>
          (not about <i>Smart Traveler</i> specifically).
        </strong>
      </p>
      <p
        className="instructions"
        id="questionnaire2"
        hidden></p>
      <p className="postInstructions">
        There is a large amount of data that can be used in the development and
        application of algorithms. Here you can see a selection of possible
        technologies in which algorithms may or may not be used. Please indicate
        whether algorithms are used or not used in these technologies.
      </p>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions"></div>
        <div className="questionnaireScale">
          <h4>Is used</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Is not used</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Don't know</h4>
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Smart speaker (e.g., Alexa)
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Smart speaker (e.g., Alexa)"
            value="Is used"
            onChange={handleAlexaChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Smart speaker (e.g., Alexa)"
            value="Is not used"
            onChange={handleAlexaChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Smart speaker (e.g., Alexa)"
            value="Don't know"
            onChange={handleAlexaChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">Smart TV</div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Smart TV"
            value="Is used"
            onChange={handleTVChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Smart TV"
            value="Is not used"
            onChange={handleTVChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Smart TV"
            value="Don't know"
            onChange={handleTVChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Wearable computing devices such as activity trackers and heart rate
          monitors
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Wearable computing devices such as activity trackers and heart rate monitors"
            value="Is used"
            onChange={handleWearableChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Wearable computing devices such as activity trackers and heart rate monitors"
            value="Is not used"
            onChange={handleWearableChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Wearable computing devices such as activity trackers and heart rate monitors"
            value="Don't know"
            onChange={handleWearableChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Internet browsers (e.g., Internet Explorer, Firefox, Google Chrome)
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Internet browsers (e.g., Internet Explorer, Firefox, Google Chrome)"
            value="Is used"
            onChange={handleBrowserChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Internet browsers (e.g., Internet Explorer, Firefox, Google Chrome)"
            value="Is not used"
            onChange={handleBrowserChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Internet browsers (e.g., Internet Explorer, Firefox, Google Chrome)"
            value="Don't know"
            onChange={handleBrowserChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Electronic payment (credit and debit card)
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Electronic payment (credit and debit card)"
            value="Is used"
            onChange={handlePaymentChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Electronic payment (credit and debit card)"
            value="Is not used"
            onChange={handlePaymentChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Electronic payment (credit and debit card)"
            value="Don't know"
            onChange={handlePaymentChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">Cell phone towers</div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Cell phone towers"
            value="Is used"
            onChange={handleTowersChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Cell phone towers"
            value="Is not used"
            onChange={handleTowersChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Cell phone towers"
            value="Don't know"
            onChange={handleTowersChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">Computer games</div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Computer games"
            value="Is used"
            onChange={handleGamesChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Computer games"
            value="Is not used"
            onChange={handleGamesChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Computer games"
            value="Don't know"
            onChange={handleGamesChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">FM radios</div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="FM radios"
            value="Is used"
            onChange={handleRadiosChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="FM radios"
            value="Is not used"
            onChange={handleRadiosChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="FM radios"
            value="Don't know"
            onChange={handleRadiosChange}
          />
        </div>
      </div>

      <p className="postInstructions">
        Algorithms are already being used in very different areas. Do you know
        which of the following functions are often performed by algorithms?
      </p>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions"></div>
        <div className="questionnaireScale">
          <h4>Are performed</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Are not performed</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Don't know</h4>
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          To create weather forecasts
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To create weather forecasts"
            value="Are performed"
            onChange={handleForecastChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To create weather forecasts"
            value="Are not performed"
            onChange={handleForecastChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To create weather forecasts"
            value="Don't know"
            onChange={handleForecastChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          To make product recommendations
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To make product recommendations"
            value="Are performed"
            onChange={handleRecommendationChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To make product recommendations"
            value="Are not performed"
            onChange={handleRecommendationChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To make product recommendations"
            value="Don't know"
            onChange={handleRecommendationChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          To create financial news (stock markets)
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To create financial news (stock markets)"
            value="Are performed"
            onChange={handleNewsChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To create financial news (stock markets)"
            value="Are not performed"
            onChange={handleNewsChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To create financial news (stock markets)"
            value="Don't know"
            onChange={handleNewsChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          To personalize advertisements
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To personalize advertisements"
            value="Are performed"
            onChange={handleAdvertisementChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To personalize advertisements"
            value="Are not performed"
            onChange={handleAdvertisementChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To personalize advertisements"
            value="Don't know"
            onChange={handleAdvertisementChange}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="medButton">
        Next
      </button>
    </div>
  );
}

export default AlgorithmAwareness;
