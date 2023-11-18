import React from "react";

function FollowupQuestionsGreen({ onNext }) {
  return (
    <div className="followupQuestionsGreenScale">
      <p className="topMargin">‎</p>
      <p
        className="postInstructions"
        id="greenQuestionnaire1">
        Please answer the following questions about your
        <strong>personal travel agent.</strong> Your answer to these questions
        will help us provide useful recommendations to future users.
      </p>
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="It is important to me that the products I use do not harm the environment."
            value="Strongly disagree"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider the potential environmental impact of my actions when making many of my decisions."
            value="Strongly disagree"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My purchase habits are affected by my concern for our environment."
            value="Strongly disagree"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am concerned about wasting the resources of our planet."
            value="Strongly disagree"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I would describe myself as environmentally responsible."
            value="Strongly disagree"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
            value="Strongly disagree"
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
