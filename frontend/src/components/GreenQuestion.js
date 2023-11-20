import React from "react";

function GreenQuestion({
  onNext,
  onBack,
  onProductsChange,
  onEnvironDecisChange,
  onPurchaseEnvironChange,
  onResourcesChange,
  onEnvironRespChange,
  onInconvenienceChange,
}) {
  const handleProductsChange = (event) => {
    const { value } = event.target;
    onProductsChange(value);
  };
  const handleEnvironDecisChange = (event) => {
    const { value } = event.target;
    onEnvironDecisChange(value);
  };
  const handlePurchaseEnvironChange = (event) => {
    const { value } = event.target;
    onPurchaseEnvironChange(value);
  };
  const handleResourcesChange = (event) => {
    const { value } = event.target;
    onResourcesChange(value);
  };
  const handleEnvironRespChange = (event) => {
    const { value } = event.target;
    onEnvironRespChange(value);
  };
  const handleInconvenienceChange = (event) => {
    const { value } = event.target;
    onInconvenienceChange(value);
  };
  return (
    <div className="survey">
      <div className="greenQuestion">
        <p className="topMargin">‎</p>
        <form className="vacation">
          <h3 className="leftQuestion">
            It is important to me that the products I use do not harm the
            environment.
          </h3>

          <div className="vacationBox">
            <input
              id="productsBtn1"
              type="radio"
              name="products"
              value="Strongly disagree"
              onChange={handleProductsChange}
            />
            <label
              htmlFor="productsBtn1"
              className="labelMargin">
              Strongly disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="productsBtn2"
              type="radio"
              name="products"
              value="Disagree"
              onChange={handleProductsChange}
            />
            <label
              htmlFor="productsBtn2"
              className="labelMargin">
              Disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="productsBtn3"
              type="radio"
              name="products"
              value="Somewhat disagree"
              onChange={handleProductsChange}
            />
            <label
              htmlFor="productsBtn3"
              className="labelMargin">
              Somewhat disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="productsBtn4"
              type="radio"
              name="products"
              value="Neither agree nor disagree"
              onChange={handleProductsChange}
            />
            <label
              htmlFor="productsBtn4"
              className="labelMargin">
              Neither agree nor disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="productsBtn5"
              type="radio"
              name="products"
              value="Somewhat agree"
              onChange={handleProductsChange}
            />
            <label
              htmlFor="productsBtn5"
              className="labelMargin">
              Somewhat agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="productsBtn6"
              type="radio"
              name="products"
              value="Agree"
              onChange={handleProductsChange}
            />
            <label
              htmlFor="productsBtn6"
              className="labelMargin">
              Agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="productsBtn7"
              type="radio"
              name="products"
              value="Strongly agree"
              onChange={handleProductsChange}
            />
            <label
              htmlFor="productsBtn7"
              className="labelMargin">
              Strongly agree
            </label>
          </div>
          <h3 className="leftQuestion">
            I consider the potential environmental impact of my actions when
            making many of my decisions.
          </h3>

          <div className="vacationBox">
            <input
              id="environDecisBtn1"
              type="radio"
              name="environDecis"
              value="Strongly disagree"
              onChange={handleEnvironDecisChange}
            />
            <label
              htmlFor="environDecisBtn1"
              className="labelMargin">
              Strongly disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environDecisBtn2"
              type="radio"
              name="environDecis"
              value="Disagree"
              onChange={handleEnvironDecisChange}
            />
            <label
              htmlFor="environDecisBtn2"
              className="labelMargin">
              Disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environDecisBtn3"
              type="radio"
              name="environDecis"
              value="Somewhat disagree"
              onChange={handleEnvironDecisChange}
            />
            <label
              htmlFor="environDecisBtn3"
              className="labelMargin">
              Somewhat disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environDecisBtn4"
              type="radio"
              name="environDecis"
              value="Neither agree nor disagree"
              onChange={handleEnvironDecisChange}
            />
            <label
              htmlFor="environDecisBtn4"
              className="labelMargin">
              Neither agree nor disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environDecisBtn5"
              type="radio"
              name="environDecis"
              value="Somewhat agree"
              onChange={handleEnvironDecisChange}
            />
            <label
              htmlFor="environDecisBtn5"
              className="labelMargin">
              Somewhat agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environDecisBtn6"
              type="radio"
              name="environDecis"
              value="Agree"
              onChange={handleEnvironDecisChange}
            />
            <label
              htmlFor="environDecisBtn6"
              className="labelMargin">
              Agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environDecisBtn7"
              type="radio"
              name="environDecis"
              value="Strongly agree"
              onChange={handleEnvironDecisChange}
            />
            <label
              htmlFor="environDecisBtn7"
              className="labelMargin">
              Strongly agree
            </label>
          </div>
          <h3 className="leftQuestion">
            My purchase habits are affected by my concern for our environment.
          </h3>

          <div className="vacationBox">
            <input
              id="purchaseEvironBtn1"
              type="radio"
              name="purchaseEviron"
              value="Strongly disagree"
              onChange={handlePurchaseEnvironChange}
            />
            <label
              htmlFor="purchaseEvironBtn1"
              className="labelMargin">
              Strongly disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="purchaseEvironBtn2"
              type="radio"
              name="purchaseEviron"
              value="Disagree"
              onChange={handlePurchaseEnvironChange}
            />
            <label
              htmlFor="purchaseEvironBtn2"
              className="labelMargin">
              Disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="purchaseEvironBtn3"
              type="radio"
              name="purchaseEviron"
              value="Somewhat disagree"
              onChange={handlePurchaseEnvironChange}
            />
            <label
              htmlFor="purchaseEvironBtn3"
              className="labelMargin">
              Somewhat disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="purchaseEvironBtn4"
              type="radio"
              name="purchaseEviron"
              value="Neither agree nor disagree"
              onChange={handlePurchaseEnvironChange}
            />
            <label
              htmlFor="purchaseEvironBtn4"
              className="labelMargin">
              Neither agree nor disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="purchaseEvironBtn5"
              type="radio"
              name="purchaseEviron"
              value="Somewhat agree"
              onChange={handlePurchaseEnvironChange}
            />
            <label
              htmlFor="purchaseEvironBtn5"
              className="labelMargin">
              Somewhat agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="purchaseEvironBtn6"
              type="radio"
              name="purchaseEviron"
              value="Agree"
              onChange={handlePurchaseEnvironChange}
            />
            <label
              htmlFor="purchaseEvironBtn6"
              className="labelMargin">
              Agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="purchaseEvironBtn7"
              type="radio"
              name="purchaseEviron"
              value="Strongly agree"
              onChange={handlePurchaseEnvironChange}
            />
            <label
              htmlFor="purchaseEvironBtn7"
              className="labelMargin">
              Strongly agree
            </label>
          </div>
          <h3 className="leftQuestion">
            I am concerned about wasting the resources of our planet.
          </h3>

          <div className="vacationBox">
            <input
              id="resourcesBtn1"
              type="radio"
              name="resources"
              value="Strongly disagree"
              onChange={handleResourcesChange}
            />
            <label
              htmlFor="resourcesBtn1"
              className="labelMargin">
              Strongly disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="resourcesBtn2"
              type="radio"
              name="resources"
              value="Disagree"
              onChange={handleResourcesChange}
            />
            <label
              htmlFor="resourcesBtn2"
              className="labelMargin">
              Disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="resourcesBtn3"
              type="radio"
              name="resources"
              value="Somewhat disagree"
              onChange={handleResourcesChange}
            />
            <label
              htmlFor="resourcesBtn3"
              className="labelMargin">
              Somewhat disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="resourcesBtn4"
              type="radio"
              name="resources"
              value="Neither agree nor disagree"
              onChange={handleResourcesChange}
            />
            <label
              htmlFor="resourcesBtn4"
              className="labelMargin">
              Neither agree nor disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="resourcesBtn5"
              type="radio"
              name="resources"
              value="Somewhat agree"
              onChange={handleResourcesChange}
            />
            <label
              htmlFor="resourcesBtn5"
              className="labelMargin">
              Somewhat agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="resourcesBtn6"
              type="radio"
              name="resources"
              value="Agree"
              onChange={handleResourcesChange}
            />
            <label
              htmlFor="resourcesBtn6"
              className="labelMargin">
              Agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="resourcesBtn7"
              type="radio"
              name="resources"
              value="Strongly agree"
              onChange={handleResourcesChange}
            />
            <label
              htmlFor="resourcesBtn7"
              className="labelMargin">
              Strongly agree
            </label>
          </div>
          <h3 className="leftQuestion">
            I would describe myself as environmentally responsible.
          </h3>

          <div className="vacationBox">
            <input
              id="environRespBtn1"
              type="radio"
              name="environResp"
              value="Strongly disagree"
              onChange={handleEnvironRespChange}
            />
            <label
              htmlFor="environRespBtn1"
              className="labelMargin">
              Strongly disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environRespBtn2"
              type="radio"
              name="environResp"
              value="Disagree"
              onChange={handleEnvironRespChange}
            />
            <label
              htmlFor="environRespBtn2"
              className="labelMargin">
              Disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environRespBtn3"
              type="radio"
              name="environResp"
              value="Somewhat disagree"
              onChange={handleEnvironRespChange}
            />
            <label
              htmlFor="environRespBtn3"
              className="labelMargin">
              Somewhat disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environRespBtn4"
              type="radio"
              name="environResp"
              value="Neither agree nor disagree"
              onChange={handleEnvironRespChange}
            />
            <label
              htmlFor="environRespBtn4"
              className="labelMargin">
              Neither agree nor disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environRespBtn5"
              type="radio"
              name="environResp"
              value="Somewhat agree"
              onChange={handleEnvironRespChange}
            />
            <label
              htmlFor="environRespBtn5"
              className="labelMargin">
              Somewhat agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environRespBtn6"
              type="radio"
              name="environResp"
              value="Agree"
              onChange={handleEnvironRespChange}
            />
            <label
              htmlFor="environRespBtn6"
              className="labelMargin">
              Agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="environRespBtn7"
              type="radio"
              name="environResp"
              value="Strongly agree"
              onChange={handleEnvironRespChange}
            />
            <label
              htmlFor="environRespBtn7"
              className="labelMargin">
              Strongly agree
            </label>
          </div>
          <h3 className="leftQuestion">
            I am willing to be inconvenienced in order to take actions that are
            more environmentally friendly.
          </h3>

          <div className="vacationBox">
            <input
              id="inconvenienceBtn1"
              type="radio"
              name="inconvenience"
              value="Strongly disagree"
              onChange={handleInconvenienceChange}
            />
            <label
              htmlFor="inconvenienceBtn1"
              className="labelMargin">
              Strongly disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="inconvenienceBtn2"
              type="radio"
              name="inconvenience"
              value="Disagree"
              onChange={handleInconvenienceChange}
            />
            <label
              htmlFor="inconvenienceBtn2"
              className="labelMargin">
              Disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="inconvenienceBtn3"
              type="radio"
              name="inconvenience"
              value="Somewhat disagree"
              onChange={handleInconvenienceChange}
            />
            <label
              htmlFor="inconvenienceBtn3"
              className="labelMargin">
              Somewhat disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="inconvenienceBtn4"
              type="radio"
              name="inconvenience"
              value="Neither agree nor disagree"
              onChange={handleInconvenienceChange}
            />
            <label
              htmlFor="inconvenienceBtn4"
              className="labelMargin">
              Neither agree nor disagree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="inconvenienceBtn5"
              type="radio"
              name="inconvenience"
              value="Somewhat agree"
              onChange={handleInconvenienceChange}
            />
            <label
              htmlFor="inconvenienceBtn5"
              className="labelMargin">
              Somewhat agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="inconvenienceBtn6"
              type="radio"
              name="inconvenience"
              value="Agree"
              onChange={handleInconvenienceChange}
            />
            <label
              htmlFor="inconvenienceBtn6"
              className="labelMargin">
              Agree
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="inconvenienceBtn7"
              type="radio"
              name="inconvenience"
              value="Strongly agree"
              onChange={handleInconvenienceChange}
            />
            <label
              htmlFor="inconvenienceBtn7"
              className="labelMargin">
              Strongly agree
            </label>
          </div>
        </form>
        <button
          type="button"
          onClick={onBack}
          className="medButton">
          Back
        </button>
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

export default GreenQuestion;
