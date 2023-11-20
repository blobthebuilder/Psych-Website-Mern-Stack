import React from "react";

function Question1({
  onNext,
  onRuggedChange,
  onExcitedChange,
  onUncomfortableChange,
  onDominatingChange,
  onThriftyChange,
  onPleasantChange,
  onContemporaryChange,
  onOrganizedChange,
  onRationalChange,
  onYouthfulChange,
  onFormalChange,
  onOrthodoxChange,
  onComplexChange,
  onColorlessChange,
  onModestChange,
}) {
  const handleRuggedChange = (event) => {
    const { value } = event.target;
    onRuggedChange(value);
  };
  const handleExcitedChange = (event) => {
    const { value } = event.target;
    onExcitedChange(value);
  };
  const handleUncomfortableChange = (event) => {
    const { value } = event.target;
    onUncomfortableChange(value);
  };
  const handleDominatingChange = (event) => {
    const { value } = event.target;
    onDominatingChange(value);
  };
  const handleThriftyChange = (event) => {
    const { value } = event.target;
    onThriftyChange(value);
  };
  const handlePleasantChange = (event) => {
    const { value } = event.target;
    onPleasantChange(value);
  };
  const handleContemporaryChange = (event) => {
    const { value } = event.target;
    onContemporaryChange(value);
  };
  const handleOrganizedChange = (event) => {
    const { value } = event.target;
    onOrganizedChange(value);
  };
  const handleRationalChange = (event) => {
    const { value } = event.target;
    onRationalChange(value);
  };
  const handleYouthfulChange = (event) => {
    const { value } = event.target;
    onYouthfulChange(value);
  };
  const handleFormalChange = (event) => {
    const { value } = event.target;
    onFormalChange(value);
  };
  const handleOrthodoxChange = (event) => {
    const { value } = event.target;
    onOrthodoxChange(value);
  };
  const handleComplexChange = (event) => {
    const { value } = event.target;
    onComplexChange(value);
  };
  const handleColorlessChange = (event) => {
    const { value } = event.target;
    onColorlessChange(value);
  };
  const handleModestChange = (event) => {
    const { value } = event.target;
    onModestChange(value);
  };
  return (
    <div className="survey">
      <div className="q1">
        <p className="topMargin">‎</p>
        <h3 className="question">I am...</h3>
        <form>
          <div className="container gray">
            <p className="leftBox">Rugged</p>
            <div className="box">
              <input
                type="radio"
                name="one"
                value="1"
                className="radioMargin"
                onChange={handleRuggedChange}
              />
              <input
                type="radio"
                name="one"
                value="2"
                className="radioMargin"
                onChange={handleRuggedChange}
              />
              <input
                type="radio"
                name="one"
                value="3"
                className="radioMargin"
                onChange={handleRuggedChange}
              />
              <input
                type="radio"
                name="one"
                value="4"
                className="radioMargin"
                onChange={handleRuggedChange}
              />
              <input
                type="radio"
                name="one"
                value="5"
                className="radioMargin"
                onChange={handleRuggedChange}
              />
              <input
                type="radio"
                name="one"
                value="6"
                className="radioMargin"
                onChange={handleRuggedChange}
              />
              <input
                type="radio"
                name="one"
                value="7"
                className="radioMargin"
                onChange={handleRuggedChange}
              />
            </div>
            <p className="rightBox">Delicate</p>
          </div>

          <div className="container">
            <p className="leftBox">Excited</p>
            <div className="box">
              <input
                type="radio"
                name="two"
                value="1"
                className="radioMargin"
                onChange={handleExcitedChange}
              />
              <input
                type="radio"
                name="two"
                value="2"
                className="radioMargin"
                onChange={handleExcitedChange}
              />
              <input
                type="radio"
                name="two"
                value="3"
                className="radioMargin"
                onChange={handleExcitedChange}
              />
              <input
                type="radio"
                name="two"
                value="4"
                className="radioMargin"
                onChange={handleExcitedChange}
              />
              <input
                type="radio"
                name="two"
                value="5"
                className="radioMargin"
                onChange={handleExcitedChange}
              />
              <input
                type="radio"
                name="two"
                value="6"
                className="radioMargin"
                onChange={handleExcitedChange}
              />
              <input
                type="radio"
                name="two"
                value="7"
                className="radioMargin"
                onChange={handleExcitedChange}
              />
            </div>
            <p className="rightBox">Calm</p>
          </div>

          <div className="container gray">
            <p className="leftBox">Uncomfortable</p>
            <div className="box">
              <input
                type="radio"
                name="three"
                value="1"
                className="radioMargin"
                onChange={handleUncomfortableChange}
              />
              <input
                type="radio"
                name="three"
                value="2"
                className="radioMargin"
                onChange={handleUncomfortableChange}
              />
              <input
                type="radio"
                name="three"
                value="3"
                className="radioMargin"
                onChange={handleUncomfortableChange}
              />
              <input
                type="radio"
                name="three"
                value="4"
                className="radioMargin"
                onChange={handleUncomfortableChange}
              />
              <input
                type="radio"
                name="three"
                value="5"
                className="radioMargin"
                onChange={handleUncomfortableChange}
              />
              <input
                type="radio"
                name="three"
                value="6"
                className="radioMargin"
                onChange={handleUncomfortableChange}
              />
              <input
                type="radio"
                name="three"
                value="7"
                className="radioMargin"
                onChange={handleUncomfortableChange}
              />
            </div>
            <p className="rightBox">Comfortable</p>
          </div>
          <div className="container">
            <p className="leftBox">Dominating</p>
            <div className="box">
              <input
                type="radio"
                name="four"
                value="1"
                className="radioMargin"
                onChange={handleDominatingChange}
              />
              <input
                type="radio"
                name="four"
                value="2"
                className="radioMargin"
                onChange={handleDominatingChange}
              />
              <input
                type="radio"
                name="four"
                value="3"
                className="radioMargin"
                onChange={handleDominatingChange}
              />
              <input
                type="radio"
                name="four"
                value="4"
                className="radioMargin"
                onChange={handleDominatingChange}
              />
              <input
                type="radio"
                name="four"
                value="5"
                className="radioMargin"
                onChange={handleDominatingChange}
              />
              <input
                type="radio"
                name="four"
                value="6"
                className="radioMargin"
                onChange={handleDominatingChange}
              />
              <input
                type="radio"
                name="four"
                value="7"
                className="radioMargin"
                onChange={handleDominatingChange}
              />
            </div>
            <p className="rightBox">Submissive</p>
          </div>
          <div className="container gray">
            <p className="leftBox">Thrifty</p>
            <div className="box">
              <input
                type="radio"
                name="five"
                value="1"
                className="radioMargin"
                onChange={handleThriftyChange}
              />
              <input
                type="radio"
                name="five"
                value="2"
                className="radioMargin"
                onChange={handleThriftyChange}
              />
              <input
                type="radio"
                name="five"
                value="3"
                className="radioMargin"
                onChange={handleThriftyChange}
              />
              <input
                type="radio"
                name="five"
                value="4"
                className="radioMargin"
                onChange={handleThriftyChange}
              />
              <input
                type="radio"
                name="five"
                value="5"
                className="radioMargin"
                onChange={handleThriftyChange}
              />
              <input
                type="radio"
                name="five"
                value="6"
                className="radioMargin"
                onChange={handleThriftyChange}
              />
              <input
                type="radio"
                name="five"
                value="7"
                className="radioMargin"
                onChange={handleThriftyChange}
              />
            </div>
            <p className="rightBox">Indulgent</p>
          </div>
          <div className="container">
            <p className="leftBox">Pleasant</p>
            <div className="box">
              <input
                type="radio"
                name="six"
                value="1"
                className="radioMargin"
                onChange={handlePleasantChange}
              />
              <input
                type="radio"
                name="six"
                value="2"
                className="radioMargin"
                onChange={handlePleasantChange}
              />
              <input
                type="radio"
                name="six"
                value="3"
                className="radioMargin"
                onChange={handlePleasantChange}
              />
              <input
                type="radio"
                name="six"
                value="4"
                className="radioMargin"
                onChange={handlePleasantChange}
              />
              <input
                type="radio"
                name="six"
                value="5"
                className="radioMargin"
                onChange={handlePleasantChange}
              />
              <input
                type="radio"
                name="six"
                value="6"
                className="radioMargin"
                onChange={handlePleasantChange}
              />
              <input
                type="radio"
                name="six"
                value="7"
                className="radioMargin"
                onChange={handlePleasantChange}
              />
            </div>
            <p className="rightBox">Unpleasant</p>
          </div>
          <div className="container gray">
            <p className="leftBox">Contemporary</p>
            <div className="box">
              <input
                type="radio"
                name="seven"
                value="1"
                className="radioMargin"
                onChange={handleContemporaryChange}
              />
              <input
                type="radio"
                name="seven"
                value="2"
                className="radioMargin"
                onChange={handleContemporaryChange}
              />
              <input
                type="radio"
                name="seven"
                value="3"
                className="radioMargin"
                onChange={handleContemporaryChange}
              />
              <input
                type="radio"
                name="seven"
                value="4"
                className="radioMargin"
                onChange={handleContemporaryChange}
              />
              <input
                type="radio"
                name="seven"
                value="5"
                className="radioMargin"
                onChange={handleContemporaryChange}
              />
              <input
                type="radio"
                name="seven"
                value="6"
                className="radioMargin"
                onChange={handleContemporaryChange}
              />
              <input
                type="radio"
                name="seven"
                value="7"
                className="radioMargin"
                onChange={handleContemporaryChange}
              />
            </div>
            <p className="rightBox">Noncontemporary</p>
          </div>
          <div className="container">
            <p className="leftBox">Organized</p>
            <div className="box">
              <input
                type="radio"
                name="nine"
                value="1"
                className="radioMargin"
                onChange={handleOrganizedChange}
              />
              <input
                type="radio"
                name="nine"
                value="2"
                className="radioMargin"
                onChange={handleOrganizedChange}
              />
              <input
                type="radio"
                name="nine"
                value="3"
                className="radioMargin"
                onChange={handleOrganizedChange}
              />
              <input
                type="radio"
                name="nine"
                value="4"
                className="radioMargin"
                onChange={handleOrganizedChange}
              />
              <input
                type="radio"
                name="nine"
                value="5"
                className="radioMargin"
                onChange={handleOrganizedChange}
              />
              <input
                type="radio"
                name="nine"
                value="6"
                className="radioMargin"
                onChange={handleOrganizedChange}
              />
              <input
                type="radio"
                name="nine"
                value="7"
                className="radioMargin"
                onChange={handleOrganizedChange}
              />
            </div>
            <p className="rightBox">Unorganized</p>
          </div>
          <div className="container gray">
            <p className="leftBox">Rational</p>
            <div className="box">
              <input
                type="radio"
                name="ten"
                value="1"
                className="radioMargin"
                onChange={handleRationalChange}
              />
              <input
                type="radio"
                name="ten"
                value="2"
                className="radioMargin"
                onChange={handleRationalChange}
              />
              <input
                type="radio"
                name="ten"
                value="3"
                className="radioMargin"
                onChange={handleRationalChange}
              />
              <input
                type="radio"
                name="ten"
                value="4"
                className="radioMargin"
                onChange={handleRationalChange}
              />
              <input
                type="radio"
                name="ten"
                value="5"
                className="radioMargin"
                onChange={handleRationalChange}
              />
              <input
                type="radio"
                name="ten"
                value="6"
                className="radioMargin"
                onChange={handleRationalChange}
              />
              <input
                type="radio"
                name="ten"
                value="7"
                className="radioMargin"
                onChange={handleRationalChange}
              />
            </div>
            <p className="rightBox">Emotional</p>
          </div>
          <div className="container">
            <p className="leftBox">Youthful</p>
            <div className="box">
              <input
                type="radio"
                name="eleven"
                value="1"
                className="radioMargin"
                onChange={handleYouthfulChange}
              />
              <input
                type="radio"
                name="eleven"
                value="2"
                className="radioMargin"
                onChange={handleYouthfulChange}
              />
              <input
                type="radio"
                name="eleven"
                value="3"
                className="radioMargin"
                onChange={handleYouthfulChange}
              />
              <input
                type="radio"
                name="eleven"
                value="4"
                className="radioMargin"
                onChange={handleYouthfulChange}
              />
              <input
                type="radio"
                name="eleven"
                value="5"
                className="radioMargin"
                onChange={handleYouthfulChange}
              />
              <input
                type="radio"
                name="eleven"
                value="6"
                className="radioMargin"
                onChange={handleYouthfulChange}
              />
              <input
                type="radio"
                name="eleven"
                value="7"
                className="radioMargin"
                onChange={handleYouthfulChange}
              />
            </div>
            <p className="rightBox">Mature</p>
          </div>
          <div className="container gray">
            <p className="leftBox">Formal</p>
            <div className="box">
              <input
                type="radio"
                name="twelve"
                value="1"
                className="radioMargin"
                onChange={handleFormalChange}
              />
              <input
                type="radio"
                name="twelve"
                value="2"
                className="radioMargin"
                onChange={handleFormalChange}
              />
              <input
                type="radio"
                name="twelve"
                value="3"
                className="radioMargin"
                onChange={handleFormalChange}
              />
              <input
                type="radio"
                name="twelve"
                value="4"
                className="radioMargin"
                onChange={handleFormalChange}
              />
              <input
                type="radio"
                name="twelve"
                value="5"
                className="radioMargin"
                onChange={handleFormalChange}
              />
              <input
                type="radio"
                name="twelve"
                value="6"
                className="radioMargin"
                onChange={handleFormalChange}
              />
              <input
                type="radio"
                name="twelve"
                value="7"
                className="radioMargin"
                onChange={handleFormalChange}
              />
            </div>
            <p className="rightBox">Informal</p>
          </div>
          <div className="container">
            <p className="leftBox">Orthodox</p>
            <div className="box">
              <input
                type="radio"
                name="thirteen"
                value="1"
                className="radioMargin"
                onChange={handleOrthodoxChange}
              />
              <input
                type="radio"
                name="thirteen"
                value="2"
                className="radioMargin"
                onChange={handleOrthodoxChange}
              />
              <input
                type="radio"
                name="thirteen"
                value="3"
                className="radioMargin"
                onChange={handleOrthodoxChange}
              />
              <input
                type="radio"
                name="thirteen"
                value="4"
                className="radioMargin"
                onChange={handleOrthodoxChange}
              />
              <input
                type="radio"
                name="thirteen"
                value="5"
                className="radioMargin"
                onChange={handleOrthodoxChange}
              />
              <input
                type="radio"
                name="thirteen"
                value="6"
                className="radioMargin"
                onChange={handleOrthodoxChange}
              />
              <input
                type="radio"
                name="thirteen"
                value="7"
                className="radioMargin"
                onChange={handleOrthodoxChange}
              />
            </div>
            <p className="rightBox">Liberal</p>
          </div>
          <div className="container gray">
            <p className="leftBox">Complex</p>
            <div className="box">
              <input
                type="radio"
                name="fourteen"
                value="1"
                className="radioMargin"
                onChange={handleComplexChange}
              />
              <input
                type="radio"
                name="fourteen"
                value="2"
                className="radioMargin"
                onChange={handleComplexChange}
              />
              <input
                type="radio"
                name="fourteen"
                value="3"
                className="radioMargin"
                onChange={handleComplexChange}
              />
              <input
                type="radio"
                name="fourteen"
                value="4"
                className="radioMargin"
                onChange={handleComplexChange}
              />
              <input
                type="radio"
                name="fourteen"
                value="5"
                className="radioMargin"
                onChange={handleComplexChange}
              />
              <input
                type="radio"
                name="fourteen"
                value="6"
                className="radioMargin"
                onChange={handleComplexChange}
              />
              <input
                type="radio"
                name="fourteen"
                value="7"
                className="radioMargin"
                onChange={handleComplexChange}
              />
            </div>
            <p className="rightBox">Simple</p>
          </div>
          <div className="container">
            <p className="leftBox">Colorless</p>
            <div className="box">
              <input
                type="radio"
                name="fifteen"
                value="1"
                className="radioMargin"
                onChange={handleColorlessChange}
              />
              <input
                type="radio"
                name="fifteen"
                value="2"
                className="radioMargin"
                onChange={handleColorlessChange}
              />
              <input
                type="radio"
                name="fifteen"
                value="3"
                className="radioMargin"
                onChange={handleColorlessChange}
              />
              <input
                type="radio"
                name="fifteen"
                value="4"
                className="radioMargin"
                onChange={handleColorlessChange}
              />
              <input
                type="radio"
                name="fifteen"
                value="5"
                className="radioMargin"
                onChange={handleColorlessChange}
              />
              <input
                type="radio"
                name="fifteen"
                value="6"
                className="radioMargin"
                onChange={handleColorlessChange}
              />
              <input
                type="radio"
                name="fifteen"
                value="7"
                className="radioMargin"
                onChange={handleColorlessChange}
              />
            </div>
            <p className="rightBox">Colorful</p>
          </div>
          <div className="container gray">
            <p className="leftBox">Modest</p>
            <div className="box">
              <input
                type="radio"
                name="sixteen"
                value="1"
                className="radioMargin"
                onChange={handleModestChange}
              />
              <input
                type="radio"
                name="sixteen"
                value="2"
                className="radioMargin"
                onChange={handleModestChange}
              />
              <input
                type="radio"
                name="sixteen"
                value="3"
                className="radioMargin"
                onChange={handleModestChange}
              />
              <input
                type="radio"
                name="sixteen"
                value="4"
                className="radioMargin"
                onChange={handleModestChange}
              />
              <input
                type="radio"
                name="sixteen"
                value="5"
                className="radioMargin"
                onChange={handleModestChange}
              />
              <input
                type="radio"
                name="sixteen"
                value="6"
                className="radioMargin"
                onChange={handleModestChange}
              />
              <input
                type="radio"
                name="sixteen"
                value="7"
                className="radioMargin"
                onChange={handleModestChange}
              />
            </div>
            <p className="rightBox">Vain</p>
          </div>
        </form>
        <button
          type="button"
          onClick={onNext}
          className="medButton">
          Next
        </button>
      </div>
    </div>
  );
}

export default Question1;
