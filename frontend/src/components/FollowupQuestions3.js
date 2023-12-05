import React from "react";

function FollowupQuestions3({
  onNext,
  agent,
  onReflectChange,
  onIdentifyChange,
  onConnectionChange,
  onAgentCommunicateChange,
  onTypePersonChange,
  onAgentMeChange,
  onSuitsChange,
}) {
  const handleReflectChange = (event) => {
    const { value } = event.target;
    onReflectChange(value);
  };
  const handleIdentifyChange = (event) => {
    const { value } = event.target;
    onIdentifyChange(value);
  };
  const handleConnectionChange = (event) => {
    const { value } = event.target;
    onConnectionChange(value);
  };
  const handleAgentCommunicateChange = (event) => {
    const { value } = event.target;
    onAgentCommunicateChange(value);
  };
  const handleTypePersonChange = (event) => {
    const { value } = event.target;
    onTypePersonChange(value);
  };
  const handleAgentMeChange = (event) => {
    const { value } = event.target;
    onAgentMeChange(value);
  };
  const handleSuitsChange = (event) => {
    const { value } = event.target;
    onSuitsChange(value);
  };
  return (
    <div className="followupQuestions3">
      <p className="topMargin">‎</p>
      {agent.length === 8 && (
        <p
          className="postInstructions"
          id="questionnaire1">
          Please answer the following questions about your{" "}
          <strong>personal travel agent.</strong> The personal travel agent is
          the version of Smart Traveler that was designed to make
          recommendations based on <strong>your personal assessment.</strong>
        </p>
      )}
      {agent.length === 7 && (
        <p
          className="postInstructions"
          id="questionnaire1">
          Please answer the following questions about your{" "}
          <strong>general travel agent.</strong> The general travel agent is the
          version of Smart Traveler that was designed to make recommendations
          based on <strong>previous users' personality assessments.</strong>
        </p>
      )}
      {agent.length === 12 && (
        <p
          className="postInstructions"
          id="questionnaire1">
          Please answer the following questions about your{" "}
          <strong>unprogrammed travel agent.</strong>
          The unprogrammed travel agent is the version of Smart Traveler that
          was designed to make recommendations <strong>at random.</strong>
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
          I feel my {agent.toLowerCase()} travel agent reflects who I am.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="reflects who I am"
            value="Strongly agree"
            onChange={handleReflectChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="reflects who I am"
            value="Somewhat agree"
            onChange={handleReflectChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="reflects who I am"
            value="Neither agree nor disagree"
            onChange={handleReflectChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="reflects who I am"
            value="Somewhat disagree"
            onChange={handleReflectChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="reflects who I am"
            value="Strongly disagree"
            onChange={handleReflectChange}
          />
        </div>
      </div>

      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I can identify with my {agent.toLowerCase()} travel agent.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can identify with my agent"
            value="Strongly agree"
            onChange={handleIdentifyChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can identify with my agent"
            value="Somewhat agree"
            onChange={handleIdentifyChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can identify with my agent"
            value="Neither agree nor disagree"
            onChange={handleIdentifyChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can identify with my agent"
            value="Somewhat disagree"
            onChange={handleIdentifyChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can identify with my agent"
            value="Strongly disagree"
            onChange={handleIdentifyChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I feel a personal connection to my {agent.toLowerCase()} travel agent.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I feel a personal connection to my agent"
            value="Strongly agree"
            onChange={handleConnectionChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I feel a personal connection to my agent"
            value="Somewhat agree"
            onChange={handleConnectionChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I feel a personal connection to my agent"
            value="Neither agree nor disagree"
            onChange={handleConnectionChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I feel a personal connection to my agent"
            value="Somewhat disagree"
            onChange={handleConnectionChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I feel a personal connection to my agent"
            value="Strongly disagree"
            onChange={handleConnectionChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I can use my {agent.toLowerCase()} travel agent to communicate who I
          am to other people.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can use my agent to communicate who I am to other people"
            value="Strongly agree"
            onChange={handleAgentCommunicateChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can use my agent to communicate who I am to other people"
            value="Somewhat agree"
            onChange={handleAgentCommunicateChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can use my agent to communicate who I am to other people"
            value="Neither agree nor disagree"
            onChange={handleAgentCommunicateChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can use my agent to communicate who I am to other people"
            value="Somewhat disagree"
            onChange={handleAgentCommunicateChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can use my agent to communicate who I am to other people"
            value="Strongly disagree"
            onChange={handleAgentCommunicateChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I think my {agent.toLowerCase()} travel agent could help me become the
          type of person I want to be.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I think my agent could help me become the type of person I want to be"
            value="Strongly agree"
            onChange={handleTypePersonChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I think my agent could help me become the type of person I want to be"
            value="Somewhat agree"
            onChange={handleTypePersonChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I think my agent could help me become the type of person I want to be"
            value="Neither agree nor disagree"
            onChange={handleTypePersonChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I think my agent could help me become the type of person I want to be"
            value="Somewhat disagree"
            onChange={handleTypePersonChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I think my agent could help me become the type of person I want to be"
            value="Strongly disagree"
            onChange={handleTypePersonChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I consider my {agent.toLowerCase()} travel agent to be “me” (it
          reflects who I consider myself to be or the way that I want to present
          myself to others).
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider my agent to be me"
            value="Strongly agree"
            onChange={handleAgentMeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider my agent to be me"
            value="Somewhat agree"
            onChange={handleAgentMeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider my agent to be me"
            value="Neither agree nor disagree"
            onChange={handleAgentMeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider my agent to be me"
            value="Somewhat disagree"
            onChange={handleAgentMeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I consider my agent to be me"
            value="Strongly disagree"
            onChange={handleAgentMeChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I feel my {agent.toLowerCase()} travel agent suits me well.
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My agent suits me well."
            value="Strongly agree"
            onChange={handleSuitsChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My agent suits me well."
            value="Somewhat agree"
            onChange={handleSuitsChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My agent suits me well."
            value="Neither agree nor disagree"
            onChange={handleSuitsChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My agent suits me well."
            value="Somewhat disagree"
            onChange={handleSuitsChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="My agent suits me well."
            value="Strongly disagree"
            onChange={handleSuitsChange}
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
