import React from "react";

function AlgorithmKnowledge({
  onNext,
  onRecognizeChange,
  onDevelopChange,
  onInfluenceChange,
  onDatabaseChange,
  onSearchChange,
  onContentChange,
  onThinkChange,
  onCensorshipChange,
  onChancesChange,
  onReportsChange,
  onHumansChange,
}) {
  const handleRecognizeChange = (event) => {
    const { value } = event.target;
    onRecognizeChange(value);
  };
  const handleDevelopChange = (event) => {
    const { value } = event.target;
    onDevelopChange(value);
  };
  const handleInfluenceChange = (event) => {
    const { value } = event.target;
    onInfluenceChange(value);
  };
  const handleDatabaseChange = (event) => {
    const { value } = event.target;
    onDatabaseChange(value);
  };
  const handleSearchChange = (event) => {
    const { value } = event.target;
    onSearchChange(value);
  };
  const handleContentChange = (event) => {
    const { value } = event.target;
    onContentChange(value);
  };
  const handleThinkChange = (event) => {
    const { value } = event.target;
    onThinkChange(value);
  };
  const handleCensorshipChange = (event) => {
    const { value } = event.target;
    onCensorshipChange(value);
  };
  const handleChancesChange = (event) => {
    const { value } = event.target;
    onChancesChange(value);
  };
  const handleReportsChange = (event) => {
    const { value } = event.target;
    onReportsChange(value);
  };
  const handleHumansChange = (event) => {
    const { value } = event.target;
    onHumansChange(value);
  };
  return (
    <div className="algorithmKnowledge">
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
        What do you think algorithms do on the internet?
      </p>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions"></div>
        <div className="questionnaireScale">
          <h4>True</h4>
        </div>
        <div className="questionnaireScale">
          <h4>False</h4>
        </div>
        <div className="questionnaireScale">
          <h4>Don't know</h4>
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Algorithms recognize that results, such as search results, are
          incomplete and automatically correct them
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms recognize that results, such as search results, are incomplete and automatically correct them"
            value="True"
            onChange={handleRecognizeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms recognize that results, such as search results, are incomplete and automatically correct them"
            value="False"
            onChange={handleRecognizeChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms recognize that results, such as search results, are incomplete and automatically correct them"
            value="Don't know"
            onChange={handleRecognizeChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Algorithms can develop themselves in a completely different direction
          from that for which they were created
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms can develop themselves in a completely different direction from that for which they were created"
            value="True"
            onChange={handleDevelopChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms can develop themselves in a completely different direction from that for which they were created"
            value="False"
            onChange={handleDevelopChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms can develop themselves in a completely different direction from that for which they were created"
            value="Don't know"
            onChange={handleDevelopChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          I can influence algorithms with my internet usage behavior
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can influence algorithms with my internet usage behavior"
            value="True"
            onChange={handleInfluenceChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can influence algorithms with my internet usage behavior"
            value="False"
            onChange={handleInfluenceChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="I can influence algorithms with my internet usage behavior"
            value="Don't know"
            onChange={handleInfluenceChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          The database used by an algorithm is not decisive in determining its
          quality
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The database used by an algorithm is not decisive in determining its quality"
            value="True"
            onChange={handleDatabaseChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The database used by an algorithm is not decisive in determining its quality"
            value="False"
            onChange={handleDatabaseChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The database used by an algorithm is not decisive in determining its quality"
            value="Don't know"
            onChange={handleDatabaseChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          When searching for a job online, job offers displayed may vary from
          person to person despite the same search entry
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="When searching for a job online, job offers displayed may vary from person to person despite the same search entry"
            value="True"
            onChange={handleSearchChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="When searching for a job online, job offers displayed may vary from person to person despite the same search entry"
            value="False"
            onChange={handleSearchChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="When searching for a job online, job offers displayed may vary from person to person despite the same search entry"
            value="Don't know"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          The use of algorithms, which deliver personalized content, can mean
          that the content you find is mostly consistent with your pre-existing
          opinions
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The use of algorithms, which deliver personalized content, can mean that the content you find is mostly consistent with your pre-existing opinions"
            value="True"
            onChange={handleContentChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The use of algorithms, which deliver personalized content, can mean that the content you find is mostly consistent with your pre-existing opinions"
            value="False"
            onChange={handleContentChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="The use of algorithms, which deliver personalized content, can mean that the content you find is mostly consistent with your pre-existing opinions"
            value="Don't know"
            onChange={handleContentChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Algorithms are able to think like human beings
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms are able to think like human beings"
            value="True"
            onChange={handleThinkChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms are able to think like human beings"
            value="False"
            onChange={handleThinkChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms are able to think like human beings"
            value="Don't know"
            onChange={handleThinkChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Algorithms are independent of government censorship
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms are independent of government censorship"
            value="True"
            onChange={handleCensorshipChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms are independent of government censorship"
            value="False"
            onChange={handleCensorshipChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms are independent of government censorship"
            value="Don't know"
            onChange={handleCensorshipChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Algorithms present both chances and risks
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms present both chances and risks"
            onChange={handleChancesChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms present both chances and risks"
            value="False"
            onChange={handleChancesChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Algorithms present both chances and risks"
            value="Don't know"
            onChange={handleChancesChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          For some media companies, content that is repeated regularly (e.g.,
          traffic reports) is already written by algorithms
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="For some media companies, content that is repeated regularly (e.g., traffic reports) is already written by algorithms"
            value="True"
            onChange={handleReportsChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="For some media companies, content that is repeated regularly (e.g., traffic reports) is already written by algorithms"
            value="False"
            onChange={handleReportsChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="For some media companies, content that is repeated regularly (e.g., traffic reports) is already written by algorithms"
            value="Don't know"
            onChange={handleReportsChange}
          />
        </div>
      </div>
      <div className="questionnaireContainer">
        <div className="questionnaireQuestions">
          Humans are never involved when algorithms are used
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Humans are never involved when algorithms are used"
            value="True"
            onChange={handleHumansChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Humans are never involved when algorithms are used"
            value="False"
            onChange={handleHumansChange}
          />
        </div>
        <div className="questionnaireScale">
          <input
            type="radio"
            name="Humans are never involved when algorithms are used"
            value="Don't know"
            onChange={handleHumansChange}
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

export default AlgorithmKnowledge;
