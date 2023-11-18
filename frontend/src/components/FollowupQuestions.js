import React from "react";

function FollowupQuestions({ onNext }) {
  return (
    <div className="followupQuestions">
      <p className="topMargin">‎</p>
      <p
        className="postInstructions"
        id="interactivityQuestionnaire1">
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
        id="questionnaire3"></p>
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Allowed me to choose what kind of information I was getting"
            value="To some extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Allowed me to choose what kind of information I was getting"
            value="To a moderate extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Allowed me to choose what kind of information I was getting"
            value="To a great extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Allowed me to choose what kind of information I was getting"
            value="To a very great extent"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Let me be in charge of getting what I wanted"
            value="To some extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Let me be in charge of getting what I wanted"
            value="To a moderate extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Let me be in charge of getting what I wanted"
            value="To a great extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Let me be in charge of getting what I wanted"
            value="To a very great extent"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Took account of my responses to the personality assessment"
            value="To some extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Took account of my responses to the personality assessment"
            value="To a moderate extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Took account of my responses to the personality assessment"
            value="To a great extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Took account of my responses to the personality assessment"
            value="To a very great extent"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Didn't make me wait too long to get a recommendation"
            value="To some extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Didn't make me wait too long to get a recommendation"
            value="To a moderate extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Didn't make me wait too long to get a recommendation"
            value="To a great extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Didn't make me wait too long to get a recommendation"
            value="To a very great extent"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Gave me the sense of being watched out for"
            value="To some extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Gave me the sense of being watched out for"
            value="To a moderate extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Gave me the sense of being watched out for"
            value="To a great extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Gave me the sense of being watched out for"
            value="To a very great extent"
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Felt like someone was helping me
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone was helping me"
            value="Not at all"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone was helping me"
            value="To some extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone was helping me"
            value="To a moderate extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone was helping me"
            value="To a great extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone was helping me"
            value="To a very great extent"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone understood me"
            value="To some extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone understood me"
            value="To a moderate extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone understood me"
            value="To a great extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Felt like someone understood me"
            value="To a very great extent"
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
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Made me feel listened to"
            value="To some extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Made me feel listened to"
            value="To a moderate extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Made me feel listened to"
            value="To a great extent"
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Made me feel listened to"
            value="To a very great extent"
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
