import React from "react";

function FollowupQuestions2({ onNext, agent }) {
  return (
    <div className="followupQuestions2">
      <p className="topMargin">‎</p>
      {agent.length === 8 && (
        <p
          className="postInstructions"
          id="questionnaire1">
          Please answer the following questions about your{" "}
          <strong>personal travel agent.</strong> Your answer to these questions
          will help us provide useful recommendations to future users.
        </p>
      )}
      {agent.length === 7 && (
        <p
          className="postInstructions"
          id="questionnaire1">
          Please answer the following questions about your experiences using the{" "}
          <strong>general travel agent.</strong> Your answer to these questions
          will help us provide useful recommendations to future users.
        </p>
      )}
      {agent.length === 12 && (
        <p
          className="postInstructions"
          id="questionnaire1">
          Please answer the following questions about your experiences using the{" "}
          <strong>unprogrammed travel agent.</strong> Your answer to these
          questions will help us provide useful recommendations to future users.
        </p>
      )}

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
          Using my {agent.toLowerCase()} travel agent would enhance my
          effectiveness of choosing the best travel option
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Strongly disagree"
          />
        </div>
      </div>

      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Using my {agent.toLowerCase()} travel agent would make it easier for
          me to choose the best travel option
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Strongly disagree"
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Using my {agent.toLowerCase()} travel agent would enable me to choose
          a travel option more quickly
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Strongly disagree"
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Using my {agent.toLowerCase()} travel agent for my travel choices
          would increase my productivity
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Strongly disagree"
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Using my {agent.toLowerCase()} travel agent would improve my travel
          choice performance
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Strongly disagree"
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Overall my {agent.toLowerCase()} travel agent would be useful for me
          to utilize while choosing travel options
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Strongly agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Somewhat agree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Neither agree nor disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Somewhat disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Disagree"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
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

export default FollowupQuestions2;
