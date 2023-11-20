import React from "react";

function Question3({
  onNext,
  onBack,
  vacationsArr,
  activitiesArr,
  accommodationArr,
  communicationArr,
  cuisinesArr,
}) {
  const vacationOneValue = vacationsArr[0][0].substring(
    0,
    vacationsArr[0][0].indexOf(":")
  );
  const vacationTwoValue = vacationsArr[1][0].substring(
    0,
    vacationsArr[0][0].indexOf(":")
  );
  const vacationThreeValue = vacationsArr[2][0].substring(
    0,
    vacationsArr[0][0].indexOf(":")
  );
  const vacationFourValue = vacationsArr[3][0].substring(
    0,
    vacationsArr[0][0].indexOf(":")
  );
  const vacationFiveValue = vacationsArr[4][0].substring(
    0,
    vacationsArr[0][0].indexOf(":")
  );
  const vacationSixValue = vacationsArr[5][0].substring(
    0,
    vacationsArr[0][0].indexOf(":")
  );
  const vacationSevenValue = vacationsArr[6][0].substring(
    0,
    vacationsArr[0][0].indexOf(":")
  );
  const vacationEightValue = vacationsArr[7][0].substring(
    0,
    vacationsArr[0][0].indexOf(":")
  );
  const vacationOneText = {
    __html: "<strong>" + vacationsArr[0][0] + "</strong>" + vacationsArr[0][1],
  };
  const vacationTwoText = {
    __html: "<strong>" + vacationsArr[1][0] + "</strong>" + vacationsArr[1][1],
  };
  const vacationThreeText = {
    __html: "<strong>" + vacationsArr[2][0] + "</strong>" + vacationsArr[2][1],
  };
  const vacationFourText = {
    __html: "<strong>" + vacationsArr[3][0] + "</strong>" + vacationsArr[3][1],
  };
  const vacationFiveText = {
    __html: "<strong>" + vacationsArr[4][0] + "</strong>" + vacationsArr[4][1],
  };
  const vacationSixText = {
    __html: "<strong>" + vacationsArr[5][0] + "</strong>" + vacationsArr[5][1],
  };
  const vacationSevenText = {
    __html: "<strong>" + vacationsArr[6][0] + "</strong>" + vacationsArr[6][1],
  };
  const vacationEightText = {
    __html: "<strong>" + vacationsArr[7][0] + "</strong>" + vacationsArr[7][1],
  };

  const activitiesOneValue = activitiesArr[0][0].substring(
    0,
    activitiesArr[0][0].indexOf(":")
  );
  const activitiesTwoValue = activitiesArr[1][0].substring(
    0,
    activitiesArr[0][0].indexOf(":")
  );
  const activitiesThreeValue = activitiesArr[2][0].substring(
    0,
    activitiesArr[0][0].indexOf(":")
  );
  const activitiesFourValue = activitiesArr[3][0].substring(
    0,
    activitiesArr[0][0].indexOf(":")
  );
  const activitiesFiveValue = activitiesArr[4][0].substring(
    0,
    activitiesArr[0][0].indexOf(":")
  );
  const activitiesSixValue = activitiesArr[5][0].substring(
    0,
    activitiesArr[0][0].indexOf(":")
  );
  const activitiesSevenValue = activitiesArr[6][0].substring(
    0,
    activitiesArr[0][0].indexOf(":")
  );
  const activitiesEightValue = activitiesArr[7][0].substring(
    0,
    activitiesArr[0][0].indexOf(":")
  );
  const activitiesNineValue = activitiesArr[8][0].substring(
    0,
    activitiesArr[0][0].indexOf(":")
  );
  const activitiesTenValue = activitiesArr[9][0].substring(
    0,
    activitiesArr[0][0].indexOf(":")
  );
  const activitiesOneText = {
    __html:
      "<strong>" + activitiesArr[0][0] + "</strong>" + activitiesArr[0][1],
  };
  const activitiesTwoText = {
    __html:
      "<strong>" + activitiesArr[1][0] + "</strong>" + activitiesArr[1][1],
  };
  const activitiesThreeText = {
    __html:
      "<strong>" + activitiesArr[2][0] + "</strong>" + activitiesArr[2][1],
  };
  const activitiesFourText = {
    __html:
      "<strong>" + activitiesArr[3][0] + "</strong>" + activitiesArr[3][1],
  };
  const activitiesFiveText = {
    __html:
      "<strong>" + activitiesArr[4][0] + "</strong>" + activitiesArr[4][1],
  };
  const activitiesSixText = {
    __html:
      "<strong>" + activitiesArr[5][0] + "</strong>" + activitiesArr[5][1],
  };
  const activitiesSevenText = {
    __html:
      "<strong>" + activitiesArr[6][0] + "</strong>" + activitiesArr[6][1],
  };
  const activitiesEightText = {
    __html:
      "<strong>" + activitiesArr[7][0] + "</strong>" + activitiesArr[7][1],
  };
  const activitiesNineText = {
    __html:
      "<strong>" + activitiesArr[8][0] + "</strong>" + activitiesArr[8][1],
  };
  const activitiesTenText = {
    __html:
      "<strong>" + activitiesArr[9][0] + "</strong>" + activitiesArr[9][1],
  };

  const accommodationOne = accommodationArr[0];
  const accommodationTwo = accommodationArr[1];
  const accommodationThree = accommodationArr[2];
  const accommodationFour = accommodationArr[3];
  const accommodationFive = accommodationArr[4];

  const communicationOne = communicationArr[0];
  const communicationTwo = communicationArr[1];
  const communicationThree = communicationArr[2];
  const communicationFour = communicationArr[3];
  const communicationFive = communicationArr[4];

  const cuisineOneValue = cuisinesArr[0][0].substring(
    0,
    cuisinesArr[0][0].indexOf(":")
  );
  const cuisineTwoValue = cuisinesArr[1][0].substring(
    0,
    cuisinesArr[0][0].indexOf(":")
  );
  const cuisineThreeValue = cuisinesArr[2][0].substring(
    0,
    cuisinesArr[0][0].indexOf(":")
  );
  const cuisineFourValue = cuisinesArr[3][0].substring(
    0,
    cuisinesArr[0][0].indexOf(":")
  );
  const cuisineFiveValue = cuisinesArr[4][0].substring(
    0,
    cuisinesArr[0][0].indexOf(":")
  );
  const cuisineSixValue = cuisinesArr[5][0].substring(
    0,
    cuisinesArr[0][0].indexOf(":")
  );
  const cuisineOneText = {
    __html: "<strong>" + cuisinesArr[0][0] + "</strong>" + cuisinesArr[0][1],
  };
  const cuisineTwoText = {
    __html: "<strong>" + cuisinesArr[1][0] + "</strong>" + cuisinesArr[1][1],
  };
  const cuisineThreeText = {
    __html: "<strong>" + cuisinesArr[2][0] + "</strong>" + cuisinesArr[2][1],
  };
  const cuisineFourText = {
    __html: "<strong>" + cuisinesArr[3][0] + "</strong>" + cuisinesArr[3][1],
  };
  const cuisineFiveText = {
    __html: "<strong>" + cuisinesArr[4][0] + "</strong>" + cuisinesArr[4][1],
  };
  const cuisineSixText = {
    __html: "<strong>" + cuisinesArr[5][0] + "</strong>" + cuisinesArr[5][1],
  };

  return (
    <div className="survey">
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
              value={vacationOneValue}
            />
            <label
              htmlFor="preferredVacationBtn1"
              name="preferredVacation1"
              className="labelMargin"
              dangerouslySetInnerHTML={vacationOneText}></label>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="preferredVacationBtn2"
                type="radio"
                name="preferredVacation"
                value={vacationTwoValue}
              />
              <label
                htmlFor="preferredVacationBtn2"
                name="preferredVacation2"
                className="labelMargin"
                dangerouslySetInnerHTML={vacationTwoText}></label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="preferredVacationBtn3"
                type="radio"
                name="preferredVacation"
                value={vacationThreeValue}
              />

              <label
                htmlFor="preferredVacationBtn3"
                name="preferredVacation3"
                className="labelMargin"
                dangerouslySetInnerHTML={vacationThreeText}></label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="preferredVacationBtn4"
                type="radio"
                name="preferredVacation"
                value={vacationFourValue}
              />

              <label
                htmlFor="preferredVacationBtn4"
                name="preferredVacation4"
                className="labelMargin"
                dangerouslySetInnerHTML={vacationFourText}></label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="preferredVacationBtn5"
                type="radio"
                name="preferredVacation"
                value={vacationFiveValue}
              />

              <label
                htmlFor="preferredVacationBtn5"
                name="preferredVacation5"
                className="labelMargin"
                dangerouslySetInnerHTML={vacationFiveText}></label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="preferredVacationBtn6"
                type="radio"
                name="preferredVacation"
                value={vacationSixValue}
              />

              <label
                htmlFor="preferredVacationBtn6"
                name="preferredVacation6"
                className="labelMargin"
                dangerouslySetInnerHTML={vacationSixText}></label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="preferredVacationBtn7"
                type="radio"
                name="preferredVacation"
                value={vacationSevenValue}
              />

              <label
                htmlFor="preferredVacationBtn7"
                name="preferredVacation7"
                className="labelMargin"
                dangerouslySetInnerHTML={vacationSevenText}></label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="preferredVacationBtn8"
                type="radio"
                name="preferredVacation"
                value={vacationEightValue}
              />

              <label
                htmlFor="preferredVacationBtn8"
                name="preferredVacation8"
                className="labelMargin"
                dangerouslySetInnerHTML={vacationEightText}></label>
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
              htmlFor="500"
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
              htmlFor="500-1000"
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
              htmlFor="1000-2500"
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
              htmlFor="2500-5000"
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
              htmlFor="5000-10000"
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
              htmlFor=">10000"
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
              value={activitiesOneValue}
              className="smallCheckbox"
            />
            <label
              htmlFor="outdooractivitiesBtn1"
              className="labelMargin"
              name="outdooractivities1"
              dangerouslySetInnerHTML={activitiesOneText}></label>
          </div>

          <div className="vacationBox">
            <input
              id="outdooractivitiesBtn2"
              type="checkbox"
              name="cultural experiences"
              value={activitiesTwoValue}
              className="smallCheckbox"
            />
            <label
              htmlFor="outdooractivitiesBtn2"
              className="labelMargin"
              name="outdooractivities2"
              dangerouslySetInnerHTML={activitiesTwoText}></label>
          </div>

          <div className="vacationBox">
            <input
              id="outdooractivitiesBtn3"
              type="checkbox"
              className="smallCheckbox"
              name="relaxation"
              value={activitiesThreeValue}
            />
            <label
              htmlFor="outdooractivitiesBtn3"
              className="labelMargin"
              name="outdooractivities3"
              dangerouslySetInnerHTML={activitiesThreeText}></label>
          </div>

          <div className="vacationBox">
            <input
              id="outdooractivitiesBtn4"
              type="checkbox"
              className="smallCheckbox"
              name="adventure"
              value={activitiesFourValue}
            />
            <label
              htmlFor="outdooractivitiesBtn4"
              className="labelMargin"
              name="outdooractivities4"
              dangerouslySetInnerHTML={activitiesFourText}></label>
          </div>

          <div className="vacationBox">
            <input
              id="outdooractivitiesBtn5"
              type="checkbox"
              name="sports"
              value={activitiesFiveValue}
              className="smallCheckbox"
            />
            <label
              htmlFor="outdooractivitiesBtn5"
              className="labelMargin"
              name="outdooractivities5"
              dangerouslySetInnerHTML={activitiesFiveText}></label>
          </div>

          <div className="vacationBox">
            <input
              id="outdooractivitiesBtn6"
              type="checkbox"
              name="history and heritage"
              value={activitiesSixValue}
              className="smallCheckbox"
            />
            <label
              htmlFor="outdooractivitiesBtn6"
              className="labelMargin"
              name="outdooractivities6"
              dangerouslySetInnerHTML={activitiesSixText}></label>
          </div>

          <div className="vacationBox">
            <input
              id="outdooractivitiesBtn7"
              type="checkbox"
              name="food and wine"
              value={activitiesSevenValue}
              className="smallCheckbox"
            />
            <label
              htmlFor="outdooractivitiesBtn7"
              className="labelMargin"
              name="outdooractivities7"
              dangerouslySetInnerHTML={activitiesSevenText}></label>
          </div>

          <div className="vacationBox">
            <input
              id="outdooractivitiesBtn8"
              type="checkbox"
              name="nightlife and entertainment"
              value={activitiesEightValue}
              className="smallCheckbox"
            />
            <label
              htmlFor="outdooractivitiesBtn8"
              className="labelMargin"
              name="outdooractivities8"
              dangerouslySetInnerHTML={activitiesEightText}></label>
          </div>

          <div className="vacationBox">
            <input
              id="outdooractivitiesBtn9"
              type="checkbox"
              name="shopping"
              value={activitiesNineValue}
              className="smallCheckbox"
            />
            <label
              htmlFor="outdooractivitiesBtn9"
              className="labelMargin"
              name="outdooractivities9"
              dangerouslySetInnerHTML={activitiesNineText}></label>
          </div>

          <div className="vacationBox">
            <input
              id="outdooractivitiesBtn10"
              type="checkbox"
              name="volunteer tourism"
              value={activitiesTenValue}
              className="smallCheckbox"
            />
            <label
              htmlFor="outdooractivitiesBtn10"
              className="labelMargin"
              name="outdooractivities10"
              dangerouslySetInnerHTML={activitiesTenText}></label>
          </div>

          <h3 className="leftQuestion">
            What is your preferred accommodation type?
          </h3>

          <div className="vacationBox">
            <input
              id="accomodationBtn1"
              type="radio"
              name="accomodation"
              value={accommodationOne}
            />
            <label
              htmlFor="accomodationBtn1"
              id="accomodation1"
              className="labelMargin">
              {accommodationOne}
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="accomodationBtn2"
              type="radio"
              name="accomodation"
              value={accommodationTwo}
            />
            <label
              htmlFor="accomodationBtn2"
              id="accomodation2"
              className="labelMargin">
              {accommodationTwo}
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="accomodationBtn3"
              type="radio"
              name="accomodation"
              value={accommodationThree}
            />
            <label
              htmlFor="accomodationBtn3"
              id="accomodation3"
              className="labelMargin">
              {accommodationThree}
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="accomodationBtn4"
              type="radio"
              name="accomodation"
              value={accommodationFour}
            />
            <label
              htmlFor="accomodationBtn4"
              id="accomodation4"
              className="labelMargin">
              {accommodationFour}
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="accomodationBtn5"
              type="radio"
              name="accomodation"
              value={accommodationFive}
            />
            <label
              htmlFor="accomodationBtn5"
              id="accomodation5"
              className="labelMargin">
              {accommodationFive}
            </label>
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
              htmlFor="activityBtn1"
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
              htmlFor="activityBtn2"
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
              htmlFor="activityBtn3"
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
              htmlFor="activityBtn4"
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
              htmlFor="activityBtn5"
              className="labelMargin">
              <strong>None: </strong>I prefer a trip focused solely on
              relaxation and downtime, with no physical activity involved.
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
              htmlFor="cultureBtn1"
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
              htmlFor="cultureBtn2"
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
              htmlFor="cultureBtn3"
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
              htmlFor="cultureBtn4"
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
              htmlFor="cultureBtn5"
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
              value={communicationOne}
            />
            <label
              htmlFor="communicationBtn1"
              id="communication1"
              className="labelMargin">
              {communicationOne}
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="communicationBtn2"
              type="radio"
              name="communication"
              value={communicationTwo}
            />
            <label
              htmlFor="communicationBtn2"
              id="communication2"
              className="labelMargin">
              {communicationTwo}
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="communicationBtn3"
              type="radio"
              name="communication"
              value={communicationThree}
            />
            <label
              htmlFor="communicationBtn3"
              id="communication3"
              className="labelMargin">
              {communicationThree}
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="communicationBtn4"
              type="radio"
              name="communication"
              value={communicationFour}
            />
            <label
              htmlFor="communicationBtn4"
              id="communication4"
              className="labelMargin">
              {communicationFour}
            </label>
          </div>
          <div className="vacationBox">
            <input
              id="communicationBtn5"
              type="radio"
              name="communication"
              value={communicationFive}
            />
            <label
              htmlFor="communicationBtn5"
              id="communication5"
              className="labelMargin">
              {communicationFive}
            </label>
          </div>

          <h3 className="leftQuestion">
            How comfortable are you when traveling to destinations with
            different language or cultural barriers?
          </h3>

          <div className="vacationBox">
            <input
              id="languageBtn1"
              type="radio"
              name="language"
              value="very uncomfortable"
            />
            <label
              htmlFor="languageBtn1"
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
              htmlFor="languageBtn2"
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
              htmlFor="languageBtn3"
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
              htmlFor="languageBtn4"
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
              htmlFor="languageBtn5"
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
              value={cuisineOneValue}
            />
            <label
              htmlFor="cuisineBtn1"
              className="labelMargin"
              name="cuisine1"
              dangerouslySetInnerHTML={cuisineOneText}></label>
          </div>
          <div className="vacationBox">
            <input
              id="cuisineBtn2"
              type="radio"
              name="cuisine"
              value={cuisineTwoValue}
            />
            <label
              htmlFor="cuisineBtn2"
              className="labelMargin"
              name="cuisine2"
              dangerouslySetInnerHTML={cuisineTwoText}></label>
          </div>
          <div className="vacationBox">
            <input
              id="cuisineBtn3"
              type="radio"
              name="cuisine"
              value={cuisineThreeValue}
            />
            <label
              htmlFor="cuisineBtn3"
              className="labelMargin"
              name="cuisine3"
              dangerouslySetInnerHTML={cuisineThreeText}></label>
          </div>
          <div className="vacationBox">
            <input
              id="cuisineBtn4"
              type="radio"
              name="cuisine"
              value={cuisineFourValue}
            />
            <label
              htmlFor="cuisineBtn4"
              className="labelMargin"
              name="cuisine4"
              dangerouslySetInnerHTML={cuisineFourText}></label>
          </div>
          <div className="vacationBox">
            <input
              id="cuisineBtn5"
              type="radio"
              name="cuisine"
              value={cuisineFiveValue}
            />
            <label
              htmlFor="cuisineBtn5"
              className="labelMargin"
              name="cuisine5"
              dangerouslySetInnerHTML={cuisineFiveText}></label>
          </div>
          <div className="vacationBox">
            <input
              id="cuisineBtn6"
              type="radio"
              name="cuisine"
              value={cuisineSixValue}
            />
            <label
              htmlFor="cuisineBtn6"
              className="labelMargin"
              name="cuisine6"
              dangerouslySetInnerHTML={cuisineSixText}></label>
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
              htmlFor="relaxationBtn1"
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
              htmlFor="relaxationBtn2"
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
              htmlFor="relaxationBtn3"
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
              htmlFor="relaxationBtn4"
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
              htmlFor="relaxationBtn5"
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
    </div>
  );
}

export default Question3;
