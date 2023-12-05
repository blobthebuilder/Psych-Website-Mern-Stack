import React from "react";

function FollowupQuestionsGreen({
  onNext,
  agent,
  onProductsFollowupChange,
  onActionsFollowupChange,
  onPurchaseFollowupChange,
  onResourcesFollowupChange,
  onResponsibleFollowupChange,
  onInconvenienceFollowupChange,
}) {
  const handleProductsFollowupChange = (event) => {
    const { value } = event.target;
    onProductsFollowupChange(value);
  };
  const handleActionsFollowupChange = (event) => {
    const { value } = event.target;
    onActionsFollowupChange(value);
  };
  const handlePurchaseFollowupChange = (event) => {
    const { value } = event.target;
    onPurchaseFollowupChange(value);
  };
  const handleResourcesFollowupChange = (event) => {
    const { value } = event.target;
    onResourcesFollowupChange(value);
  };
  const handleResponsibleFollowupChange = (event) => {
    const { value } = event.target;
    onResponsibleFollowupChange(value);
  };
  const handleInconvenienceFollowupChange = (event) => {
    const { value } = event.target;
    onInconvenienceFollowupChange(value);
  };
  return (
    <div className="followupQuestionsGreenScale">
      <p className="topMargin">‎</p>
      <p
        className="instructions"
        id="questionnaire2"
        hidden></p>
      <p
        className="postInstructions"
        id="questionnaire3">
        Please indicate how much you agree or disagree with each statement.
      </p>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions"></div>
        <div className="questionnaireScale">
          <h4>Strongly agree</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Agree</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Somewhat agree</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Neither agree nor disagree</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Somewhat disagree</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Disagree</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Strongly disagree</h4>
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          It is important to me that the products I use do not harm the
          environment.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Strongly agree"
            onChange={handleProductsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Agree"
            onChange={handleProductsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Somewhat agree"
            onChange={handleProductsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Neither agree nor disagree"
            onChange={handleProductsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Somewhat disagree"
            onChange={handleProductsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Disagree"
            onChange={handleProductsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Strongly disagree"
            onChange={handleProductsFollowupChange}
          />
        </div>
      </div>

      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I consider the potential environmental impact of my actions when
          making many of my decisions.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Strongly agree"
            onChange={handleActionsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Agree"
            onChange={handleActionsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Somewhat agree"
            onChange={handleActionsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Neither agree nor disagree"
            onChange={handleActionsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Somewhat disagree"
            onChange={handleActionsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Disagree"
            onChange={handleActionsFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Strongly disagree"
            onChange={handleActionsFollowupChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          My purchase habits are affected by my concern for our environment.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Strongly agree"
            onChange={handlePurchaseFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Agree"
            onChange={handlePurchaseFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Somewhat agree"
            onChange={handlePurchaseFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Neither agree nor disagree"
            onChange={handlePurchaseFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Somewhat disagree"
            onChange={handlePurchaseFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Disagree"
            onChange={handlePurchaseFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Strongly disagree"
            onChange={handlePurchaseFollowupChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I am concerned about wasting the resources of our planet.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Strongly agree"
            onChange={handleResourcesFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Agree"
            onChange={handleResourcesFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Somewhat agree"
            onChange={handleResourcesFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Neither agree nor disagree"
            onChange={handleResourcesFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Somewhat disagree"
            onChange={handleResourcesFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Disagree"
            onChange={handleResourcesFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Strongly disagree"
            onChange={handleResourcesFollowupChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I would describe myself as environmentally responsible.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Strongly agree"
            onChange={handleResponsibleFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Agree"
            onChange={handleResponsibleFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Somewhat agree"
            onChange={handleResponsibleFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Neither agree nor disagree"
            onChange={handleResponsibleFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Somewhat disagree"
            onChange={handleResponsibleFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Disagree"
            onChange={handleResponsibleFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Strongly disagree"
            onChange={handleResponsibleFollowupChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I am willing to be inconvenienced in order to take actions that are
          more environmentally friendly.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Strongly agree"
            onChange={handleInconvenienceFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Agree"
            onChange={handleInconvenienceFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Somewhat agree"
            onChange={handleInconvenienceFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Neither agree nor disagree"
            onChange={handleInconvenienceFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Somewhat disagree"
            onChange={handleInconvenienceFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Disagree"
            onChange={handleInconvenienceFollowupChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Strongly disagree"
            onChange={handleInconvenienceFollowupChange}
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

export default FollowupQuestionsGreen;
