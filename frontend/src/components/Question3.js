import React from "react";

function Question3({ onNext, onBack }) {
  return (
    <div className="q3">
      <p className="topMargin">‎</p>
      <form name="vacation">
        <h3 className="leftQuestion">
          What is your preferred type of vacation?
        </h3>
        <div className="vacationBox">
          <input
            id="preferredVacationBtn1"
            type="radio"
            name="preferredVacation"
            value="adventure"
          />
          <label
            for="preferredVacationBtn1"
            name="preferredVacation1"
            className="labelMargin"></label>
        </div>
        <div className="vacationContainer">
          <div className="vacationBox">
            <input
              id="preferredVacationBtn2"
              type="radio"
              name="preferredVacation"
              value="beach"
            />
            <label
              for="preferredVacationBtn2"
              name="preferredVacation2"
              className="labelMargin"></label>
          </div>
        </div>
        <div className="vacationContainer">
          <div className="vacationBox">
            <input
              id="preferredVacationBtn3"
              type="radio"
              name="preferredVacation"
              value="city break"
            />

            <label
              for="preferredVacationBtn3"
              name="preferredVacation3"
              className="labelMargin"></label>
          </div>
        </div>
        <div className="vacationContainer">
          <div className="vacationBox">
            <input
              id="preferredVacationBtn4"
              type="radio"
              name="preferredVacation"
              value="cultural"
            />

            <label
              for="preferredVacationBtn4"
              name="preferredVacation4"
              className="labelMargin"></label>
          </div>
        </div>
        <div className="vacationContainer">
          <div className="vacationBox">
            <input
              id="preferredVacationBtn5"
              type="radio"
              name="preferredVacation"
              value="family"
            />

            <label
              for="preferredVacationBtn5"
              name="preferredVacation5"
              className="labelMargin"></label>
          </div>
        </div>
        <div className="vacationContainer">
          <div className="vacationBox">
            <input
              id="preferredVacationBtn6"
              type="radio"
              name="preferredVacation"
              value="luxury"
            />

            <label
              for="preferredVacationBtn6"
              name="preferredVacation6"
              className="labelMargin"></label>
          </div>
        </div>
        <div className="vacationContainer">
          <div className="vacationBox">
            <input
              id="preferredVacationBtn7"
              type="radio"
              name="preferredVacation"
              value="romantic"
            />

            <label
              for="preferredVacationBtn7"
              name="preferredVacation7"
              className="labelMargin"></label>
          </div>
        </div>
        <div className="vacationContainer">
          <div className="vacationBox">
            <input
              id="preferredVacationBtn8"
              type="radio"
              name="preferredVacation"
              value="rural"
            />

            <label
              for="preferredVacationBtn8"
              name="preferredVacation8"
              className="labelMargin"></label>
          </div>
        </div>

        <h3 className="leftQuestion">What is your budget for this trip?</h3>

        <div className="vacationBox">
          <input
            id="500"
            type="radio"
            name="budget"
            value="500"
          />
          <label
            for="500"
            className="labelMargin">
            Less than $500
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="500-1000"
            type="radio"
            name="budget"
            value="500-1000"
          />
          <label
            for="500-1000"
            className="labelMargin">
            $500-$1,000
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="1000-2500"
            type="radio"
            name="budget"
            value="1000-2500"
          />
          <label
            for="1000-2500"
            className="labelMargin">
            $1,000-$2,500
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="2500-5000"
            type="radio"
            name="budget"
            value="2500-5000"
          />
          <label
            for="2500-5000"
            className="labelMargin">
            $2,500-$5,000
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="5000-10000"
            type="radio"
            name="budget"
            value="5000-10000"
          />
          <label
            for="5000-10000"
            className="labelMargin">
            $5,000-$10,000
          </label>
        </div>
        <div className="vacationBox">
          <input
            id=">10000"
            type="radio"
            name="budget"
            value=">10000"
          />
          <label
            for=">10000"
            className="labelMargin">
            More than $10,000
          </label>
        </div>

        <h3 className="leftQuestion">
          What kind of activities do you enjoy on vacation? (select all that
          apply.)
        </h3>

        <div className="vacationBox">
          <input
            id="outdooractivitiesBtn1"
            type="checkbox"
            name="outdoor activities"
            value="outdoor activities"
            className="smallCheckbox"
          />
          <label
            for="outdooractivitiesBtn1"
            className="labelMargin"
            name="outdooractivities1"></label>
        </div>

        <div className="vacationBox">
          <input
            id="outdooractivitiesBtn2"
            type="checkbox"
            name="cultural experiences"
            value="cultural experiences"
            className="smallCheckbox"
          />
          <label
            for="outdooractivitiesBtn2"
            className="labelMargin"
            name="outdooractivities2"></label>
        </div>

        <div className="vacationBox">
          <input
            id="outdooractivitiesBtn3"
            type="checkbox"
            className="smallCheckbox"
            name="relaxation"
            value="relaxation"
          />
          <label
            for="outdooractivitiesBtn3"
            className="labelMargin"
            name="outdooractivities3"></label>
        </div>

        <div className="vacationBox">
          <input
            id="outdooractivitiesBtn4"
            type="checkbox"
            className="smallCheckbox"
            name="adventure"
            value="adventure"
          />
          <label
            for="outdooractivitiesBtn4"
            className="labelMargin"
            name="outdooractivities4"></label>
        </div>

        <div className="vacationBox">
          <input
            id="outdooractivitiesBtn5"
            type="checkbox"
            name="sports"
            value="sports"
            className="smallCheckbox"
          />
          <label
            for="outdooractivitiesBtn5"
            className="labelMargin"
            name="outdooractivities5"></label>
        </div>

        <div className="vacationBox">
          <input
            id="outdooractivitiesBtn6"
            type="checkbox"
            name="history and heritage"
            value="history and heritage"
            className="smallCheckbox"
          />
          <label
            for="outdooractivitiesBtn6"
            className="labelMargin"
            name="outdooractivities6"></label>
        </div>

        <div className="vacationBox">
          <input
            id="outdooractivitiesBtn7"
            type="checkbox"
            name="food and wine"
            value="food and wine"
            className="smallCheckbox"
          />
          <label
            for="outdooractivitiesBtn7"
            className="labelMargin"
            name="outdooractivities7"></label>
        </div>

        <div className="vacationBox">
          <input
            id="outdooractivitiesBtn8"
            type="checkbox"
            name="nightlife and entertainment"
            value="nightlife and  entertainment"
            className="smallCheckbox"
          />
          <label
            for="outdooractivitiesBtn8"
            className="labelMargin"
            name="outdooractivities8"></label>
        </div>

        <div className="vacationBox">
          <input
            id="outdooractivitiesBtn9"
            type="checkbox"
            name="shopping"
            value="shopping"
            className="smallCheckbox"
          />
          <label
            for="outdooractivitiesBtn9"
            className="labelMargin"
            name="outdooractivities9"></label>
        </div>

        <div className="vacationBox">
          <input
            id="outdooractivitiesBtn10"
            type="checkbox"
            name="volunteer tourism"
            value="volunteer tourism"
            className="smallCheckbox"
          />
          <label
            for="outdooractivitiesBtn10"
            className="labelMargin"
            name="outdooractivities10"></label>
        </div>

        <h3 className="leftQuestion">
          What is your preferred acommodation type?
        </h3>

        <div className="vacationBox">
          <input
            id="accomodationBtn1"
            type="radio"
            name="accomodation"
            value="hotel"
          />
          <label
            for="accomodationBtn1"
            id="accomodation1"
            className="labelMargin"></label>
        </div>
        <div className="vacationBox">
          <input
            id="accomodationBtn2"
            type="radio"
            name="accomodation"
            value="resort"
          />
          <label
            for="accomodationBtn2"
            id="accomodation2"
            className="labelMargin"></label>
        </div>
        <div className="vacationBox">
          <input
            id="accomodationBtn3"
            type="radio"
            name="accomodation"
            value="airbnb"
          />
          <label
            for="accomodationBtn3"
            id="accomodation3"
            className="labelMargin"></label>
        </div>
        <div className="vacationBox">
          <input
            id="accomodationBtn4"
            type="radio"
            name="accomodation"
            value="vacation rental"
          />
          <label
            for="accomodationBtn4"
            id="accomodation4"
            className="labelMargin"></label>
        </div>
        <div className="vacationBox">
          <input
            id="accomodationBtn5"
            type="radio"
            name="accomodation"
            value="camping"
          />
          <label
            for="accomodationBtn5"
            id="accomodation5"
            className="labelMargin"></label>
        </div>

        <h3 className="leftQuestion">
          What is your preferred level of activity?
        </h3>

        <div className="vacationBox">
          <input
            id="activityBtn1"
            type="radio"
            name="activitylevel"
            value="low"
          />
          <label
            for="activityBtn1"
            className="labelMargin">
            <strong>Low: </strong>I prefer leisurely activities such as
            sightseeing, relaxing, and easy walks.
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="activityBtn2"
            type="radio"
            name="activitylevel"
            value="moderate"
          />
          <label
            for="activityBtn2"
            className="labelMargin">
            <strong>Moderate: </strong>I enjoy some physical activity such as
            hiking, biking, and walking tours.
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="activityBtn3"
            type="radio"
            name="activitylevel"
            value="high"
          />
          <label
            for="activityBtn3"
            className="labelMargin">
            <strong>High</strong>I prefer more strenuous activities such as
            trekking, climbing, and water sports.
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="activityBtn4"
            type="radio"
            name="activitylevel"
            value="very high"
          />
          <label
            for="activityBtn4"
            className="labelMargin">
            <strong>Very High: </strong>I seek out extreme physical activities
            such as skydiving, bungee jumping, and white-water rafting.
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="activityBtn5"
            type="radio"
            name="activitylevel"
            value="none"
          />
          <label
            for="activityBtn5"
            className="labelMargin">
            <strong>None: </strong>I prefer a trip focused solely on relaxation
            and downtime, with no physical activity involved.
          </label>
        </div>

        <h3 className="leftQuestion">
          How important is cultural immersion to you when traveling? (e.g.,
          learning about local customs, trying local food, visiting historical
          sites)
        </h3>

        <div className="vacationBox">
          <input
            id="cultureBtn1"
            type="radio"
            name="culture"
            value="not at all"
          />
          <label
            for="cultureBtn1"
            id="culture1"
            className="labelMargin">
            Not at all important
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="cultureBtn2"
            type="radio"
            name="culture"
            value="slightly important"
          />
          <label
            for="cultureBtn2"
            id="culture2"
            className="labelMargin">
            Slightly important
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="cultureBtn3"
            type="radio"
            name="culture"
            value="moderately important"
          />
          <label
            for="cultureBtn3"
            id="culture3"
            className="labelMargin">
            Moderately important
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="cultureBtn4"
            type="radio"
            name="culture"
            value="important"
          />
          <label
            for="cultureBtn4"
            id="culture4"
            className="labelMargin">
            Important
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="cultureBtn5"
            type="radio"
            name="culture"
            value="very important"
          />
          <label
            for="cultureBtn5"
            id="culture5"
            className="labelMargin">
            Very important
          </label>
        </div>

        <h3 className="leftQuestion">
          Do you prefer traveling to well-known tourist destinations or
          off-the-beaten-path destinations?
        </h3>
        <div className="vacationContainer">
          <div className="vacationBox">
            <p className="leftBox">Tourist Destinations</p>
            <div className="box">
              <input
                type="radio"
                name="path"
                value="1"
                className="radioMargin"
              />
              <input
                type="radio"
                name="path"
                value="2"
                className="radioMargin"
              />
              <input
                type="radio"
                name="path"
                value="3"
                className="radioMargin"
              />
              <input
                type="radio"
                name="path"
                value="4"
                className="radioMargin"
              />
              <input
                type="radio"
                name="path"
                value="5"
                className="radioMargin"
              />
              <input
                type="radio"
                name="path"
                value="6"
                className="radioMargin"
              />
              <input
                type="radio"
                name="path"
                value="7"
                className="radioMargin"
              />
            </div>
            <p className="rightBox">Off-the-beaten-path destinations</p>
          </div>
        </div>
        <h3 className="leftQuestion">
          What is your preferred mode of communication while traveling?
        </h3>

        <div className="vacationBox">
          <input
            id="communicationBtn1"
            type="radio"
            name="communication"
            value="phone"
          />
          <label
            for="communicationBtn1"
            id="communication1"
            className="labelMargin"></label>
        </div>
        <div className="vacationBox">
          <input
            id="communicationBtn2"
            type="radio"
            name="communication"
            value="email"
          />
          <label
            for="communicationBtn2"
            id="communication2"
            className="labelMargin"></label>
        </div>
        <div className="vacationBox">
          <input
            id="communicationBtn3"
            type="radio"
            name="communication"
            value="social media"
          />
          <label
            for="communicationBtn3"
            id="communication3"
            className="labelMargin"></label>
        </div>
        <div className="vacationBox">
          <input
            id="communicationBtn4"
            type="radio"
            name="communication"
            value="messaging apps"
          />
          <label
            for="communicationBtn4"
            id="communication4"
            className="labelMargin"></label>
        </div>
        <div className="vacationBox">
          <input
            id="communicationBtn5"
            type="radio"
            name="communication"
            value="mail"
          />
          <label
            for="communicationBtn5"
            id="communication5"
            className="labelMargin"></label>
        </div>

        <h3 className="leftQuestion">
          How comfortable are you when traveling to destinations with different
          language or cultural barriers?
        </h3>

        <div className="vacationBox">
          <input
            id="languageBtn1"
            type="radio"
            name="language"
            value="very uncomfortable"
          />
          <label
            for="languageBtn1"
            className="labelMargin">
            Very uncomfortable
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="languageBtn2"
            type="radio"
            name="language"
            value="little uncomfortable"
          />
          <label
            for="languageBtn2"
            className="labelMargin">
            A little uncomfortable
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="languageBtn3"
            type="radio"
            name="language"
            value="neither"
          />
          <label
            for="languageBtn3"
            className="labelMargin">
            Neither comfortable nor uncomfortable
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="languageBtn4"
            type="radio"
            name="language"
            value="somewhat comfortable"
          />
          <label
            for="languageBtn4"
            className="labelMargin">
            Somewhat uncomfortable
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="languageBtn5"
            type="radio"
            name="language"
            value="very comfortable"
          />
          <label
            for="languageBtn5"
            className="labelMargin">
            Very comfortable
          </label>
        </div>

        <h3 className="leftQuestion">
          What are your preferred types of cuisines when traveling?
        </h3>

        <div className="vacationBox">
          <input
            id="cuisineBtn1"
            type="radio"
            name="cuisine"
            value="local"
          />
          <label
            for="cuisineBtn1"
            className="labelMargin"
            name="cuisine1"></label>
        </div>
        <div className="vacationBox">
          <input
            id="cuisineBtn2"
            type="radio"
            name="cuisine"
            value="western"
          />
          <label
            for="cuisineBtn2"
            className="labelMargin"
            name="cuisine2"></label>
        </div>
        <div className="vacationBox">
          <input
            id="cuisineBtn3"
            type="radio"
            name="cuisine"
            value="vegetarian"
          />
          <label
            for="cuisineBtn3"
            className="labelMargin"
            name="cuisine3"></label>
        </div>
        <div className="vacationBox">
          <input
            id="cuisineBtn4"
            type="radio"
            name="cuisine"
            value="seafood"
          />
          <label
            for="cuisineBtn4"
            className="labelMargin"
            name="cuisine4"></label>
        </div>
        <div className="vacationBox">
          <input
            id="cuisineBtn5"
            type="radio"
            name="cuisine"
            value="fusion"
          />
          <label
            for="cuisineBtn5"
            className="labelMargin"
            name="cuisine5"></label>
        </div>
        <div className="vacationBox">
          <input
            id="cuisineBtn6"
            type="radio"
            name="cuisine"
            value="street food"
          />
          <label
            for="cuisineBtn6"
            className="labelMargin"
            name="cuisine6"></label>
        </div>

        <h3 className="leftQuestion">
          How important is relaxation and downtime to you when traveling?
        </h3>

        <div className="vacationBox">
          <input
            id="relaxationBtn1"
            type="radio"
            name="relaxation"
            value="not at all"
          />
          <label
            for="relaxationBtn1"
            className="labelMargin">
            Not at all important
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="relaxationBtn2"
            type="radio"
            name="relaxation"
            value="slightly"
          />
          <label
            for="relaxationBtn2"
            className="labelMargin">
            Slightly important
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="relaxationBtn3"
            type="radio"
            name="relaxation"
            value="moderately"
          />
          <label
            for="relaxationBtn3"
            className="labelMargin">
            Moderately important
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="relaxationBtn4"
            type="radio"
            name="relaxation"
            value="important"
          />
          <label
            for="relaxationBtn4"
            className="labelMargin">
            Important
          </label>
        </div>
        <div className="vacationBox">
          <input
            id="relaxationBtn5"
            type="radio"
            name="relaxation"
            value="very important"
          />
          <label
            for="relaxationBtn5"
            className="labelMargin">
            Very important
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

export default Question3;
