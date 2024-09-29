import React from "react";

function FollowupQuestions2({
  onNext,
  agent,
  onEffectivenessChange,
  onBestOptionChange,
  onOptionQuicklyChange,
  onProductivityChange,
  onPerformanceChange,
  onUtilizeChange,
  onRecommendedLikeChange
}) {
  const handleEffectivenessChange = (event) => {
    const { value } = event.target;
    onEffectivenessChange(value);
  };
  const handleBestOptionChange = (event) => {
    const { value } = event.target;
    onBestOptionChange(value);
  };
  const handleOptionQuicklyChange = (event) => {
    const { value } = event.target;
    onOptionQuicklyChange(value);
  };
  const handleProductivityChange = (event) => {
    const { value } = event.target;
    onProductivityChange(value);
  };
  const handlePerformanceChange = (event) => {
    const { value } = event.target;
    onPerformanceChange(value);
  };
  const handleUtilizeChange = (event) => {
    const { value } = event.target;
    onUtilizeChange(value);
  };
  const handleRecommendedLikeChange = (event) => {
    const {value} = event.target;
    onRecommendedLikeChange(value);
  }
  return (
    <div className="followupQuestions2">
      <p className="topMargin">‎</p>
      {agent.length === 8 && (
        <p
          className="postInstructions"
          id="questionnaire1">
          Think about your experience while using the{" "}
          <strong>personal travel agent.</strong> The personal travel agent is
          the version of Smart Traveler that was designed to make
          recommendations based on <strong>your personal assessment.</strong>
        </p>
      )}
      {agent.length === 7 && (
        <p
          className="postInstructions"
          id="questionnaire1">
          Think about your experience while using the{" "}
          <strong>general travel agent.</strong> The general travel agent is the
          version of Smart Traveler that was designed to make recommendations
          based on <strong>previous users' personality assessments.</strong>
        </p>
      )}
      {agent.length === 12 && (
        <p
          className="postInstructions"
          id="questionnaire1">
          Think about your experience while using the{" "}
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
            onChange={handleEffectivenessChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Agree"
            onChange={handleEffectivenessChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Somewhat agree"
            onChange={handleEffectivenessChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Neither agree nor disagree"
            onChange={handleEffectivenessChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Somewhat disagree"
            onChange={handleEffectivenessChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Disagree"
            onChange={handleEffectivenessChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enhance my effectiveness of choosing the best travel option"
            value="Strongly disagree"
            onChange={handleEffectivenessChange}
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
            onChange={handleBestOptionChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Agree"
            onChange={handleBestOptionChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Somewhat agree"
            onChange={handleBestOptionChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Neither agree nor disagree"
            onChange={handleBestOptionChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Somewhat disagree"
            onChange={handleBestOptionChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Disagree"
            onChange={handleBestOptionChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would make it easier for me to choose the best travel option"
            value="Strongly disagree"
            onChange={handleBestOptionChange}
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
            onChange={handleOptionQuicklyChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Agree"
            onChange={handleOptionQuicklyChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Somewhat agree"
            onChange={handleOptionQuicklyChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Neither agree nor disagree"
            onChange={handleOptionQuicklyChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Somewhat disagree"
            onChange={handleOptionQuicklyChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Disagree"
            onChange={handleOptionQuicklyChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would enable me to choose a travel option more quickly"
            value="Strongly disagree"
            onChange={handleOptionQuicklyChange}
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
            onChange={handleProductivityChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Agree"
            onChange={handleProductivityChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Somewhat agree"
            onChange={handleProductivityChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Neither agree nor disagree"
            onChange={handleProductivityChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Somewhat disagree"
            onChange={handleProductivityChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Disagree"
            onChange={handleProductivityChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would increase my productivity"
            value="Strongly disagree"
            onChange={handleProductivityChange}
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
            onChange={handlePerformanceChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Agree"
            onChange={handlePerformanceChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Somewhat agree"
            onChange={handlePerformanceChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Neither agree nor disagree"
            onChange={handlePerformanceChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Somewhat disagree"
            onChange={handlePerformanceChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Disagree"
            onChange={handlePerformanceChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would improve my travel choice performance"
            value="Strongly disagree"
            onChange={handlePerformanceChange}
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
            onChange={handleUtilizeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Agree"
            onChange={handleUtilizeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Somewhat agree"
            onChange={handleUtilizeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Neither agree nor disagree"
            onChange={handleUtilizeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Somewhat disagree"
            onChange={handleUtilizeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Disagree"
            onChange={handleUtilizeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="would be useful for me to utilize while choosing travel options"
            value="Strongly disagree"
            onChange={handleUtilizeChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          The options recommended for me are for someone like me
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The options recommended for me are for someone like me"
            value="Strongly agree"
            onChange={handleRecommendedLikeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The options recommended for me are for someone like me"
            value="Agree"
            onChange={handleRecommendedLikeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The options recommended for me are for someone like me"
            value="Somewhat agree"
            onChange={handleRecommendedLikeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The options recommended for me are for someone like me"
            value="Neither agree nor disagree"
            onChange={handleRecommendedLikeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The options recommended for me are for someone like me"
            value="Somewhat disagree"
            onChange={handleRecommendedLikeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The options recommended for me are for someone like me"
            value="Disagree"
            onChange={handleRecommendedLikeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The options recommended for me are for someone like me"
            value="Strongly disagree"
            onChange={handleRecommendedLikeChange}
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
