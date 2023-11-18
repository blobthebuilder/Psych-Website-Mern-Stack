import React from "react";

function GreenQuestion({ onNext, onBack }) {
  return (
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
          />
          <label
            for="productsBtn1"
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
          />
          <label
            for="productsBtn2"
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
          />
          <label
            for="productsBtn3"
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
          />
          <label
            for="productsBtn4"
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
          />
          <label
            for="productsBtn5"
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
          />
          <label
            for="productsBtn6"
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
          />
          <label
            for="productsBtn7"
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
          />
          <label
            for="environDecisBtn1"
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
          />
          <label
            for="environDecisBtn2"
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
          />
          <label
            for="environDecisBtn3"
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
          />
          <label
            for="environDecisBtn4"
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
          />
          <label
            for="environDecisBtn5"
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
          />
          <label
            for="environDecisBtn6"
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
          />
          <label
            for="environDecisBtn7"
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
          />
          <label
            for="purchaseEvironBtn1"
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
          />
          <label
            for="purchaseEvironBtn2"
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
          />
          <label
            for="purchaseEvironBtn3"
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
          />
          <label
            for="purchaseEvironBtn4"
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
          />
          <label
            for="purchaseEvironBtn5"
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
          />
          <label
            for="purchaseEvironBtn6"
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
          />
          <label
            for="purchaseEvironBtn7"
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
          />
          <label
            for="resourcesBtn1"
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
          />
          <label
            for="resourcesBtn2"
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
          />
          <label
            for="resourcesBtn3"
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
          />
          <label
            for="resourcesBtn4"
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
          />
          <label
            for="resourcesBtn5"
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
          />
          <label
            for="resourcesBtn6"
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
          />
          <label
            for="resourcesBtn7"
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
          />
          <label
            for="environRespBtn1"
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
          />
          <label
            for="environRespBtn2"
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
          />
          <label
            for="environRespBtn3"
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
          />
          <label
            for="environRespBtn4"
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
          />
          <label
            for="environRespBtn5"
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
          />
          <label
            for="environRespBtn6"
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
          />
          <label
            for="environRespBtn7"
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
          />
          <label
            for="inconvenienceBtn1"
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
          />
          <label
            for="inconvenienceBtn2"
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
          />
          <label
            for="inconvenienceBtn3"
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
          />
          <label
            for="inconvenienceBtn4"
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
          />
          <label
            for="inconvenienceBtn5"
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
          />
          <label
            for="inconvenienceBtn6"
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
          />
          <label
            for="inconvenienceBtn7"
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
  );
}

export default GreenQuestion;
