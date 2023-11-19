import React from "react";

function Demographics({ onNext, onBack }) {
  return (
    <div className="survey">
      <div className="demographics">
        <form name="demo">
          <p className="topMargin">‎</p>
          <h3 className="leftQuestion">
            How do you describe your gender identity? (select all that apply.)
          </h3>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="genderBtn1"
                type="checkbox"
                name="female"
                className="smallCheckbox"
              />
              <label
                for="genderBtn1"
                className="labelMargin">
                Female
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="genderBtn2"
                type="checkbox"
                name="male"
                className="smallCheckbox"
              />
              <label
                for="genderBtn2"
                className="labelMargin">
                Male
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="genderBtn3"
                type="checkbox"
                name="Genderqueer, gender non-binary, or gender fluid"
                className="smallCheckbox"
              />
              <label
                for="genderBtn3"
                className="labelMargin">
                Genderqueer, gender non-binary, or gender fluid
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="genderBtn4"
                type="checkbox"
                name="Transgender Female"
                className="smallCheckbox"
              />
              <label
                for="genderBtn4"
                className="labelMargin">
                Transgender Female
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="genderBtn5"
                type="checkbox"
                name="Transgender Male"
                className="smallCheckbox"
              />
              <label
                for="genderBtn5"
                className="labelMargin">
                Transgender Male
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="genderBtn6"
                type="checkbox"
                name="Prefer not to answer"
                className="smallCheckbox"
              />
              <label
                for="genderBtn6"
                className="labelMargin">
                Prefer not to answer
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <label
                for="genderBtn7"
                className="labelMargin">
                Other
              </label>
              <input
                id="genderBtn7"
                type="text"
                name="gender"
                className="smallTextbox"
              />
            </div>
          </div>

          <h3 className="leftQuestion">
            What is your household pre-tax income? (Enter a number, rounded to
            the nearest 1000, with no periods or commas; For example, 55000)
          </h3>
          <div className="textboxAlign">
            <input
              type="number"
              name="income"
              id="income"
              className="bigTextbox"
            />
          </div>

          <h3 className="leftQuestion">
            The ladder below represents where people stand in your country's
            society. At the top of the ladder are the people who are the best
            off, those who have the most money, most education, and best jobs.
            At the bottom are the people who are the worst off, those who have
            the last money, least education, worst jobs, or no job. Please
            select the rung that best represents where you think you stand on
            the ladder.
          </h3>
          <div className="vacationContainer">
            <div className="box">
              <input
                type="radio"
                name="ladder"
                value="1"
                className="radioLeftMargin"
              />
              <div>
                <img
                  src="../../Photos/Ladder/ladder1.jpg"
                  width="60px"
                  alt="1"
                />
              </div>
              <input
                type="radio"
                name="ladder"
                value="2"
                className="radioLeftMargin"
              />
              <div>
                <img
                  src="../../Photos/Ladder/ladder2.jpg"
                  width="60px"
                  alt="2"
                />
              </div>
              <input
                type="radio"
                name="ladder"
                value="3"
                className="radioLeftMargin"
              />
              <div>
                <img
                  src="../../Photos/Ladder/ladder3.jpg"
                  width="60px"
                  alt="3"
                />
              </div>
              <input
                type="radio"
                name="ladder"
                value="4"
                className="radioLeftMargin"
              />
              <div>
                <img
                  src="../../Photos/Ladder/ladder4.jpg"
                  width="60px"
                  alt="4"
                />
              </div>
              <input
                type="radio"
                name="ladder"
                value="5"
                className="radioLeftMargin"
              />
              <div>
                <img
                  src="../../Photos/Ladder/ladder5.jpg"
                  width="60px"
                  alt="5"
                />
              </div>
              <input
                type="radio"
                name="ladder"
                value="6"
                className="radioLeftMargin"
              />
              <div>
                <img
                  src="../../Photos/Ladder/ladder6.jpg"
                  width="60px"
                  alt="6"
                />
              </div>
              <input
                type="radio"
                name="ladder"
                value="7"
                className="radioLeftMargin"
              />
              <div>
                <img
                  src="../../Photos/Ladder/ladder7.jpg"
                  width="60px"
                  alt="7"
                />
              </div>
              <input
                type="radio"
                name="ladder"
                value="8"
                className="radioLeftMargin"
              />
              <div>
                <img
                  src="../../Photos/Ladder/ladder8.jpg"
                  width="60px"
                  alt="8"
                />
              </div>
              <input
                type="radio"
                name="ladder"
                value="9"
                className="radioLeftMargin"
              />
              <div>
                <img
                  src="../../Photos/Ladder/ladder9.jpg"
                  width="60px"
                  alt="9"
                />
              </div>
              <input
                type="radio"
                name="ladder"
                value="10"
                className="radioLeftMargin"
              />
              <div>
                <img
                  src="../../Photos/Ladder/ladder10.jpg"
                  width="60px"
                  alt="10"
                />
              </div>
            </div>
          </div>
          <h3 className="leftQuestion">
            What is the highest degree or level of school you have completed? If
            currently enrolled, please indicate your highest degree received.
          </h3>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn1"
                type="radio"
                name="degree"
                value="No schooling completed"
              />
              <label
                for="degreeBtn1"
                className="labelMargin">
                No schooling completed
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn2"
                type="radio"
                name="degree"
                value="Nursery school to 8th grade"
              />
              <label
                for="degreeBtn2"
                className="labelMargin">
                Nursery school to 8th grade
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn3"
                type="radio"
                name="degree"
                value="Some high school no diploma"
              />
              <label
                for="degreeBtn3"
                className="labelMargin">
                Some high school, no diploma
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn4"
                type="radio"
                name="degree"
                value="High school graduate, diploma or the equivalent (for example: GED)"
              />
              <label
                for="degreeBtn4"
                className="labelMargin">
                High school graduate, diploma or the equivalent (for example:
                GED)
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn5"
                type="radio"
                name="degree"
                value="Some college credit no degree"
              />
              <label
                for="degreeBtn5"
                className="labelMargin">
                Some college credit, no degree
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn6"
                type="radio"
                name="degree"
                value="Trade/technical/vocational training"
              />
              <label
                for="degreeBtn6"
                className="labelMargin">
                Trade/technical/vocational training
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn7"
                type="radio"
                name="degree"
                value="Associate degree"
              />
              <label
                for="degreeBtn7"
                className="labelMargin">
                Associate degree
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn8"
                type="radio"
                name="degree"
                value="Bachelor's degree"
              />
              <label
                for="degreeBtn8"
                className="labelMargin">
                Bachelor's degree
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn9"
                type="radio"
                name="degree"
                value="Master's degree"
              />
              <label
                for="degreeBtn9"
                className="labelMargin">
                Master's degree
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn10"
                type="radio"
                name="degree"
                value="Professional degree"
              />
              <label
                for="degreeBtn10"
                className="labelMargin">
                Professional degree
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="degreeBtn11"
                type="radio"
                name="degree"
                value="Doctorate degree"
              />
              <label
                for="degreeBtn11"
                className="labelMargin">
                Doctorate degree
              </label>
            </div>
          </div>
          <h3 className="leftQuestion">
            For each of the issues below, please place yourself on a scale from
            0=extremely liberal to 10=extremely conservative
          </h3>
          <h3 className="subquestion">Political Issues</h3>
          <div className="vacationContainer">
            <p className="leftBox">Extremely liberal</p>
            <div className="box">
              <input
                type="radio"
                name="political"
                value="1"
                className="radioLeftMargin"
              />
              <p className="typeTitle">1</p>

              <input
                type="radio"
                name="political"
                value="2"
                className="radioLeftMargin"
              />
              <p className="typeTitle">2</p>

              <input
                type="radio"
                name="political"
                value="3"
                className="radioLeftMargin"
              />
              <p className="typeTitle">3</p>

              <input
                type="radio"
                name="political"
                value="4"
                className="radioLeftMargin"
              />
              <p className="typeTitle">4</p>

              <input
                type="radio"
                name="political"
                value="5"
                className="radioLeftMargin"
              />
              <p className="typeTitle">5</p>

              <input
                type="radio"
                name="political"
                value="6"
                className="radioLeftMargin"
              />
              <p className="typeTitle">6</p>

              <input
                type="radio"
                name="political"
                value="7"
                className="radioLeftMargin"
              />
              <p className="typeTitle">7</p>

              <input
                type="radio"
                name="political"
                value="8"
                className="radioLeftMargin"
              />
              <p className="typeTitle">8</p>

              <input
                type="radio"
                name="political"
                value="9"
                className="radioLeftMargin"
              />
              <p className="typeTitle">9</p>

              <input
                type="radio"
                name="political"
                value="10"
                className="radioLeftMargin"
              />
              <p className="typeTitle">10</p>
            </div>
            <p className="rightBox">Extremely conservative</p>
          </div>
          <h3 className="subquestion">Economic Issues</h3>
          <div className="vacationContainer">
            <p className="leftBox">Extremely liberal</p>
            <div className="box">
              <input
                type="radio"
                name="economic"
                value="1"
                className="radioLeftMargin"
              />
              <p className="typeTitle">1</p>

              <input
                type="radio"
                name="economic"
                value="2"
                className="radioLeftMargin"
              />
              <p className="typeTitle">2</p>

              <input
                type="radio"
                name="economic"
                value="3"
                className="radioLeftMargin"
              />
              <p className="typeTitle">3</p>

              <input
                type="radio"
                name="economic"
                value="4"
                className="radioLeftMargin"
              />
              <p className="typeTitle">4</p>

              <input
                type="radio"
                name="economic"
                value="5"
                className="radioLeftMargin"
              />
              <p className="typeTitle">5</p>

              <input
                type="radio"
                name="economic"
                value="6"
                className="radioLeftMargin"
              />
              <p className="typeTitle">6</p>

              <input
                type="radio"
                name="economic"
                value="7"
                className="radioLeftMargin"
              />
              <p className="typeTitle">7</p>

              <input
                type="radio"
                name="economic"
                value="8"
                className="radioLeftMargin"
              />
              <p className="typeTitle">8</p>

              <input
                type="radio"
                name="economic"
                value="9"
                className="radioLeftMargin"
              />
              <p className="typeTitle">9</p>

              <input
                type="radio"
                name="economic"
                value="10"
                className="radioLeftMargin"
              />
              <p className="typeTitle">10</p>
            </div>
            <p className="rightBox">Extremely conservative</p>
          </div>
          <h3 className="subquestion">Social Issues</h3>
          <div className="vacationContainer">
            <p className="leftBox">Extremely liberal</p>
            <div className="box">
              <input
                type="radio"
                name="social"
                value="1"
                className="radioLeftMargin"
              />
              <p className="typeTitle">1</p>

              <input
                type="radio"
                name="social"
                value="2"
                className="radioLeftMargin"
              />
              <p className="typeTitle">2</p>

              <input
                type="radio"
                name="social"
                value="3"
                className="radioLeftMargin"
              />
              <p className="typeTitle">3</p>

              <input
                type="radio"
                name="social"
                value="4"
                className="radioLeftMargin"
              />
              <p className="typeTitle">4</p>

              <input
                type="radio"
                name="social"
                value="5"
                className="radioLeftMargin"
              />
              <p className="typeTitle">5</p>

              <input
                type="radio"
                name="social"
                value="6"
                className="radioLeftMargin"
              />
              <p className="typeTitle">6</p>

              <input
                type="radio"
                name="social"
                value="7"
                className="radioLeftMargin"
              />
              <p className="typeTitle">7</p>

              <input
                type="radio"
                name="social"
                value="8"
                className="radioLeftMargin"
              />
              <p className="typeTitle">8</p>

              <input
                type="radio"
                name="social"
                value="9"
                className="radioLeftMargin"
              />
              <p className="typeTitle">9</p>

              <input
                type="radio"
                name="social"
                value="10"
                className="radioLeftMargin"
              />
              <p className="typeTitle">10</p>
            </div>
            <p className="rightBox">Extremely conservative</p>
          </div>
          <h3 className="leftQuestion">How old are you?</h3>
          <div className="textboxAlign">
            <input
              type="number"
              name="age"
              id="age"
              className="bigTextbox"
            />
          </div>

          <h3 className="leftQuestion">
            What is your race of origin? (select all that apply)
          </h3>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="raceBtn1"
                type="checkbox"
                name="American Indian or Alaska Native"
                className="smallCheckbox"
              />
              <label
                for="raceBtn1"
                className="labelMargin">
                American Indian or Alaska Native
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="raceBtn2"
                type="checkbox"
                name="Asian"
                className="smallCheckbox"
              />
              <label
                for="raceBtn2"
                className="labelMargin">
                Asian
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="raceBtn3"
                type="checkbox"
                name="Black or African American"
                className="smallCheckbox"
              />
              <label
                for="raceBtn3"
                className="labelMargin">
                Black or African American
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="raceBtn4"
                type="checkbox"
                name="Hispanic, Latino, or Spanish"
                className="smallCheckbox"
              />
              <label
                for="raceBtn4"
                className="labelMargin">
                Hispanic, Latino, or Spanish
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="raceBtn5"
                type="checkbox"
                name="Middle Eastern or Arab"
                className="smallCheckbox"
              />
              <label
                for="raceBtn5"
                className="labelMargin">
                Middle Eastern or Arab
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="raceBtn6"
                type="checkbox"
                name="Native Hawaiian or other Pacific Islander"
                className="smallCheckbox"
              />
              <label
                for="raceBtn6"
                className="labelMargin">
                Native Hawaiian or other Pacific Islander
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="raceBtn7"
                type="checkbox"
                name="White"
                className="smallCheckbox"
              />
              <label
                for="raceBtn7"
                className="labelMargin">
                White
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <label
                for="raceBtn8"
                className="labelMargin">
                Other
              </label>
              <input
                type="text"
                name="race"
                id="raceBtn8"
                className="smallTextbox"
              />
            </div>
          </div>
          <h3 className="leftQuestion">
            Which best describes the area in which you currently live?
          </h3>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="residenceAreaBtn1"
                type="radio"
                name="residenceArea"
                value="Rural"
              />
              <label
                for="residenceAreaBtn1"
                className="labelMargin">
                Rural
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="residenceAreaBtn2"
                type="radio"
                name="residenceArea"
                value="Suburban"
              />
              <label
                for="residenceAreaBtn2"
                className="labelMargin">
                Suburban
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="residenceAreaBtn3"
                type="radio"
                name="residenceArea"
                value="Urban"
              />
              <label
                for="residenceAreaBtn3"
                className="labelMargin">
                Urban
              </label>
            </div>
          </div>

          <h3 className="leftQuestion">Do you have internet access at home?</h3>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="internetAccessBtn1"
                type="radio"
                name="internetAccess"
                value="Yes"
              />
              <label
                for="internetAccessBtn1"
                className="labelMargin">
                Yes
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="internetAccessBtn2"
                type="radio"
                name="internetAccess"
                value="No"
              />
              <label
                for="internetAccessBtn2"
                className="labelMargin">
                No
              </label>
            </div>
          </div>
          <h3 className="leftQuestion">
            How often do you use the Internet to look up information about
            people, things, or ideas?
          </h3>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="internetLookupBtn1"
                type="radio"
                name="internetLookup"
                value="Almost every day"
              />
              <label
                for="internetLookupBtn1"
                className="labelMargin">
                Almost every day
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="internetLookupBtn2"
                type="radio"
                name="internetLookup"
                value="A few times each week"
              />
              <label
                for="internetLookupBtn2"
                className="labelMargin">
                A few times each week
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="internetLookupBtn3"
                type="radio"
                name="internetLookup"
                value="Between once a week and once a month"
              />
              <label
                for="internetLookupBtn3"
                className="labelMargin">
                Between once a week and once a month
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="internetLookupBtn4"
                type="radio"
                name="internetLookup"
                value="Less than once a month"
              />
              <label
                for="internetLookupBtn4"
                className="labelMargin">
                Less than once a month
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="internetLookupBtn5"
                type="radio"
                name="internetLookup"
                value="Never"
              />
              <label
                for="internetLookupBtn5"
                className="labelMargin">
                Never
              </label>
            </div>
          </div>
          <h3 className="leftQuestion">
            How often do you use a computer for electronic communication (e.g.,
            e-mail or chat rooms?)
          </h3>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="eCommunicationUseBtn1"
                type="radio"
                name="eCommunicationUse"
                value="Almost every day"
              />
              <label
                for="eCommunicationUseBtn1"
                className="labelMargin">
                Almost every day
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="eCommunicationUseBtn2"
                type="radio"
                name="eCommunicationUse"
                value="A few times each week"
              />
              <label
                for="eCommunicationUseBtn2"
                className="labelMargin">
                A few times each week
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="eCommunicationUseBtn3"
                type="radio"
                name="eCommunicationUse"
                value="Between once a week and once a month"
              />
              <label
                for="eCommunicationUseBtn3"
                className="labelMargin">
                Between once a week and once a month
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="eCommunicationUseBtn4"
                type="radio"
                name="eCommunicationUse"
                value="Less than once a month"
              />
              <label
                for="eCommunicationUseBtn4"
                className="labelMargin">
                Less than once a month
              </label>
            </div>
          </div>
          <div className="vacationContainer">
            <div className="vacationBox">
              <input
                id="eCommunicationUseBtn5"
                type="radio"
                name="eCommunicationUse"
                value="Never"
              />
              <label
                for="eCommunicationUseBtn5"
                className="labelMargin">
                Never
              </label>
            </div>
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

export default Demographics;
