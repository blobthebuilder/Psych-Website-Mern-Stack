import React from "react";

function AlgorithmAwareness({ onNext }) {
  return (
    <div className="algorithmAwareness">
      <p className="topMargin">‎</p>
      <p className="postInstructions">
        Please answer the following questions about algorithms (not about
        <i>Smart Traveler</i> specifically).
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Smart speaker (e.g., Alexa)"
            value="Is not used"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Smart speaker (e.g., Alexa)"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Smart TV"
            value="Is not used"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Smart TV"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Wearable computing devices such as activity trackers and heart rate monitors"
            value="Is not used"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Wearable computing devices such as activity trackers and heart rate monitors"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Internet browsers (e.g., Internet Explorer, Firefox, Google Chrome)"
            value="Is not used"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Internet browsers (e.g., Internet Explorer, Firefox, Google Chrome)"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Electronic payment (credit and debit card)"
            value="Is not used"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Electronic payment (credit and debit card)"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Cell phone towers"
            value="Is not used"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Cell phone towers"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Computer games"
            value="Is not used"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Computer games"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="FM radios"
            value="Is not used"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="FM radios"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To create weather forecasts"
            value="Are not performed"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To create weather forecasts"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To make product recommendations"
            value="Are not performed"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To make product recommendations"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To create financial news (stock markets)"
            value="Are not performed"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To create financial news (stock markets)"
            value="Don't know"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To personalize advertisements"
            value="Are not performed"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="To personalize advertisements"
            value="Don't know"
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
