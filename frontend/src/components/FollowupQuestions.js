import React from "react";

function FollowupQuestions({
  onNext,
  agent,
  onChooseChange,
  onChargeChange,
  onAccountChange,
  onWaitChange,
  onSenseChange,
  onEngageChange,
  onUnderstoodChange,
  onListenChange,
}) {
  const handleChooseChange = (event) => {
    const { value } = event.target;
    onChooseChange(value);
  };
  const handleChargeChange = (event) => {
    const { value } = event.target;
    onChargeChange(value);
  };
  const handleAccountChange = (event) => {
    const { value } = event.target;
    onAccountChange(value);
  };
  const handleWaitChange = (event) => {
    const { value } = event.target;
    onWaitChange(value);
  };
  const handleSenseChange = (event) => {
    const { value } = event.target;
    onSenseChange(value);
  };
  const handleEngageChange = (event) => {
    const { value } = event.target;
    onEngageChange(value);
  };
  const handleUnderstoodChange = (event) => {
    const { value } = event.target;
    onUnderstoodChange(value);
  };
  const handleListenChange = (event) => {
    const { value } = event.target;
    onListenChange(value);
  };

  return (
    <div className="followupQuestions">
      <p className="topMargin">‎</p>
      {agent.length === 8 && (
        <>
          <p
            className="postInstructions"
            id="interactivityQuestionnaire1">
            Please answer the following questions about your{" "}
            <strong>personal travel agent</strong>. Your answer to these
            questions will help us provide useful recommendations to future
            users.
          </p>
          <p className="postInstructions">
            Please answer the following questions about your{" "}
            <strong>personal travel agent.</strong> The personal travel agent is
            the version of Smart Traveler that was designed to make
            recommendations based on <strong>your personal assessment.</strong>
          </p>
        </>
      )}
      {agent.length === 7 && (
        <>
          <p
            className="postInstructions"
            id="interactivityQuestionnaire1">
            Please answer the following questions about your{" "}
            <strong>general travel agent</strong>. Your answer to these
            questions will help us provide useful recommendations to future
            users.
          </p>
          <p className="postInstructions">
            Please answer the following questions about your{" "}
            <strong>general travel agent.</strong> The general travel agent is
            the version of Smart Traveler that was designed to make
            recommendations based on{" "}
            <strong>previous users' personality assessments.</strong>
          </p>
        </>
      )}
      {agent.length === 12 && (
        <>
          <p
            className="postInstructions"
            id="interactivityQuestionnaire1">
            Please answer the following questions about your{" "}
            <strong>unprogrammed travel agent</strong>. Your answer to these
            questions will help us provide useful recommendations to future
            users.
          </p>
          <p className="postInstructions">
            Please answer the following questions about your{" "}
            <strong>unprogrammed travel agent.</strong> The unprogrammed travel
            agent is the version of Smart Traveler that was designed to make
            recommendations <strong>at random.</strong>
          </p>
        </>
      )}

      <p
        className="instructions"
        id="questionnaire2"
        hidden></p>
      <p
        className="postInstructions"
        id="questionnaire3">
        During the experiment, the process of developing and then using my{" "}
        {agent.toLowerCase()} travel agent…
      </p>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions"></div>
        <div className="questionnaireScale">
          <h4>Not at all</h4>
        </div>
        <div className="questionnaireScale">
          <h4>To some extent</h4>
        </div>
        <div className="questionnaireScale">
          <h4>To a moderate extent</h4>
        </div>
        <div className="questionnaireScale">
          <h4>To a great extent</h4>
        </div>
        <div className="questionnaireScale">
          <h4>To a very great extent</h4>
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Allowed me to choose what kind of information I was getting
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Allowed me to choose what kind of information I was getting"
            value="Not at all"
            onChange={handleChooseChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Allowed me to choose what kind of information I was getting"
            value="To some extent"
            onChange={handleChooseChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Allowed me to choose what kind of information I was getting"
            value="To a moderate extent"
            onChange={handleChooseChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Allowed me to choose what kind of information I was getting"
            value="To a great extent"
            onChange={handleChooseChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Allowed me to choose what kind of information I was getting"
            value="To a very great extent"
            onChange={handleChooseChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Let me be in charge of getting what I wanted
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Let me be in charge of getting what I wanted"
            value="Not at all"
            onChange={handleChargeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Let me be in charge of getting what I wanted"
            value="To some extent"
            onChange={handleChargeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Let me be in charge of getting what I wanted"
            value="To a moderate extent"
            onChange={handleChargeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Let me be in charge of getting what I wanted"
            value="To a great extent"
            onChange={handleChargeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Let me be in charge of getting what I wanted"
            value="To a very great extent"
            onChange={handleChargeChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Took account of my responses to the personality assessment
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Took account of my responses to the personality assessment"
            value="Not at all"
            onChange={handleAccountChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Took account of my responses to the personality assessment"
            value="To some extent"
            onChange={handleAccountChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Took account of my responses to the personality assessment"
            value="To a moderate extent"
            onChange={handleAccountChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Took account of my responses to the personality assessment"
            value="To a great extent"
            onChange={handleAccountChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Took account of my responses to the personality assessment"
            value="To a very great extent"
            onChange={handleAccountChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Didn't make me wait too long to get a recommendation
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Didn't make me wait too long to get a recommendation"
            value="Not at all"
            onChange={handleWaitChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Didn't make me wait too long to get a recommendation"
            value="To some extent"
            onChange={handleWaitChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Didn't make me wait too long to get a recommendation"
            value="To a moderate extent"
            onChange={handleWaitChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Didn't make me wait too long to get a recommendation"
            value="To a great extent"
            onChange={handleWaitChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Didn't make me wait too long to get a recommendation"
            value="To a very great extent"
            onChange={handleWaitChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Gave me the sense of being watched out for
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Gave me the sense of being watched out for"
            value="Not at all"
            onChange={handleSenseChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Gave me the sense of being watched out for"
            value="To some extent"
            onChange={handleSenseChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Gave me the sense of being watched out for"
            value="To a moderate extent"
            onChange={handleSenseChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Gave me the sense of being watched out for"
            value="To a great extent"
            onChange={handleSenseChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Gave me the sense of being watched out for"
            value="To a very great extent"
            onChange={handleSenseChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Felt like someone was engaging with me
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone was helping me"
            value="Not at all"
            onChange={handleEngageChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone was helping me"
            value="To some extent"
            onChange={handleEngageChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone was helping me"
            value="To a moderate extent"
            onChange={handleEngageChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone was helping me"
            value="To a great extent"
            onChange={handleEngageChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone was helping me"
            value="To a very great extent"
            onChange={handleEngageChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Felt like someone understood me
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone understood me"
            value="Not at all"
            onChange={handleUnderstoodChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone understood me"
            value="To some extent"
            onChange={handleUnderstoodChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone understood me"
            value="To a moderate extent"
            onChange={handleUnderstoodChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone understood me"
            value="To a great extent"
            onChange={handleUnderstoodChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone understood me"
            value="To a very great extent"
            onChange={handleUnderstoodChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">Made me feel listened to</div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Made me feel listened to"
            value="Not at all"
            onChange={handleListenChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Made me feel listened to"
            value="To some extent"
            onChange={handleListenChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Made me feel listened to"
            value="To a moderate extent"
            onChange={handleListenChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Made me feel listened to"
            value="To a great extent"
            onChange={handleListenChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Made me feel listened to"
            value="To a very great extent"
            onChange={handleListenChange}
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

export default FollowupQuestions;
