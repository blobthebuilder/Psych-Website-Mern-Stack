import React from "react";

function FollowupQuestions3({ onNext }) {
  return (
    <div className="followupQuestions3">
      <p className="topMargin">‎</p>
      <p
        className="postInstructions"
        id="identificationQuestionnaire1">
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
          <h4>Somewhat agree</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Neither agree nor disagree</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Somewhat disagree</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Strongly disagree</h4>
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I feel my personal travel agent reflects who I am.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="reflects who I am"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="reflects who I am"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="reflects who I am"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="reflects who I am"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="reflects who I am"
            value="Strongly disagree"
          />
        </div>
      </div>

      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I can identify with my personal travel agent.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can identify with my agent"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can identify with my agent"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can identify with my agent"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can identify with my agent"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can identify with my agent"
            value="Strongly disagree"
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I feel a personal connection to my personal travel agent.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I feel a personal connection to my agent"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I feel a personal connection to my agent"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I feel a personal connection to my agent"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I feel a personal connection to my agent"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I feel a personal connection to my agent"
            value="Strongly disagree"
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I can use my personal travel agent to communicate who I am to other
          people.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can use my agent to communicate who I am to other people"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can use my agent to communicate who I am to other people"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can use my agent to communicate who I am to other people"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can use my agent to communicate who I am to other people"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can use my agent to communicate who I am to other people"
            value="Strongly disagree"
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I think my personal travel agent could help me become the type of
          person I want to be.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I think my agent could help me become the type of person I want to be"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I think my agent could help me become the type of person I want to be"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I think my agent could help me become the type of person I want to be"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I think my agent could help me become the type of person I want to be"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I think my agent could help me become the type of person I want to be"
            value="Strongly disagree"
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I consider my personal travel agent to be “me” (it reflects who I
          consider myself to be or the way that I want to present myself to
          others).
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider my agent to be me"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider my agent to be me"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider my agent to be me"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider my agent to be me"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider my agent to be me"
            value="Strongly disagree"
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I feel my personal travel agent suits me well.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My agent suits me well."
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My agent suits me well."
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My agent suits me well."
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My agent suits me well."
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My agent suits me well."
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

export default FollowupQuestions3;