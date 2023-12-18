import React from "react";

function Itinerary({
  onNext,
  type,
  features,
  recommendedAndEco,
  onSelectionChange,
}) {
  const typeFeatures = features[type];
  const recommended = recommendedAndEco[type][0];
  const eco = recommendedAndEco[type][1];

  const handleSelectionChange = (event) => {
    const { value } = event.target;
    onSelectionChange(value);
  };

  return (
    <div
      className="itinerary"
      id="flight">
      <div className="itineraryGroup">
        <div className="itineraryContainer">
          <div className="itinerarySuggested">
            <h1 className="title">{type}</h1>
          </div>
        </div>
        <div className="itineraryContainer">
          <div className="itinerarySuggested">
            <input
              type="radio"
              name="flightBtn"
              className="bigCheckbox"
              defaultChecked={0 === recommended}
              onChange={handleSelectionChange}
              value={0}
            />
          </div>
          <div className="itineraryBox">
            <div className="innerItineraryBox">
              <strong
                className="itineraryTitle"
                name="flightTitle">
                {typeFeatures[0][1][0]}
              </strong>
              <p
                name="flightFeature1"
                className="itineraryDescription">
                {typeFeatures[1][0]}: {typeFeatures[1][1][0]}
              </p>
              <p name="flightFeature2">
                {typeFeatures[2][0]}: {typeFeatures[2][1][0]}
              </p>
              <p
                name="flightFeature3"
                className="itineraryReview">
                {typeFeatures[3][0]}: {typeFeatures[3][1][0]}
              </p>
              {eco === 0 && (
                <p
                  name="flightEcoLogo"
                  className="ecoLogo">
                  Eco-friendly
                </p>
              )}
            </div>
          </div>
          <div className="itineraryEco">
            {0 === recommended && (
              <p className="flightSuggested suggested">Recommended</p>
            )}
          </div>
        </div>
        <div className="itineraryContainer">
          <div className="itinerarySuggested">
            <input
              type="radio"
              name="flightBtn"
              className="bigCheckbox"
              defaultChecked={1 === recommended}
              onChange={handleSelectionChange}
              value={1}
            />
          </div>
          <div className="itineraryBox">
            <div className="innerItineraryBox">
              <strong
                className="itineraryTitle"
                name="flightTitle">
                {typeFeatures[0][1][1]}
              </strong>
              <p
                name="flightFeature1"
                className="itineraryDescription">
                {typeFeatures[1][0]}: {typeFeatures[1][1][1]}
              </p>
              <p name="flightFeature2">
                {typeFeatures[2][0]}: {typeFeatures[2][1][1]}
              </p>
              <p
                name="flightFeature3"
                className="itineraryReview">
                {typeFeatures[3][0]}: {typeFeatures[3][1][1]}
              </p>
              {eco === 1 && (
                <p
                  name="flightEcoLogo"
                  className="ecoLogo">
                  Eco-friendly
                </p>
              )}
            </div>
          </div>
          <div className="itineraryEco">
            {1 === recommended && (
              <p className="flightSuggested suggested">Recommended</p>
            )}
          </div>
        </div>
        <div className="itineraryContainer">
          <div className="itinerarySuggested">
            <input
              type="radio"
              name="flightBtn"
              className="bigCheckbox"
              defaultChecked={2 === recommended}
              onChange={handleSelectionChange}
              value={2}
            />
          </div>
          <div className="itineraryBox">
            <div className="innerItineraryBox">
              <strong
                className="itineraryTitle"
                name="flightTitle">
                {typeFeatures[0][1][2]}
              </strong>
              <p
                name="flightFeature1"
                className="itineraryDescription">
                {typeFeatures[1][0]}: {typeFeatures[1][1][2]}
              </p>
              <p name="flightFeature2">
                {typeFeatures[2][0]}: {typeFeatures[2][1][2]}
              </p>
              <p
                name="flightFeature3"
                className="itineraryReview">
                {typeFeatures[3][0]}: {typeFeatures[3][1][2]}
              </p>
              {eco === 2 && (
                <p
                  name="flightEcoLogo"
                  className="ecoLogo">
                  Eco-friendly
                </p>
              )}
            </div>
          </div>
          <div className="itineraryEco">
            {2 === recommended && (
              <p className="flightSuggested suggested">Recommended</p>
            )}
          </div>
        </div>
        <div className="itineraryContainer">
          <div className="itinerarySuggested">
            <input
              type="radio"
              name="flightBtn"
              className="bigCheckbox"
              defaultChecked={3 === recommended}
              onChange={handleSelectionChange}
              value={3}
            />
          </div>
          <div className="itineraryBox">
            <div className="innerItineraryBox">
              <strong
                className="itineraryTitle"
                name="flightTitle">
                {typeFeatures[0][1][3]}
              </strong>
              <p
                name="flightFeature1"
                className="itineraryDescription">
                {typeFeatures[1][0]}: {typeFeatures[1][1][3]}
              </p>
              <p name="flightFeature2">
                {typeFeatures[2][0]}: {typeFeatures[2][1][3]}
              </p>
              <p
                name="flightFeature3"
                className="itineraryReview">
                {typeFeatures[3][0]}: {typeFeatures[3][1][3]}
              </p>
              {eco === 3 && (
                <p
                  name="flightEcoLogo"
                  className="ecoLogo">
                  Eco-friendly
                </p>
              )}
            </div>
          </div>
          <div className="itineraryEco">
            {3 === recommended && (
              <p className="flightSuggested suggested">Recommended</p>
            )}
          </div>
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

export default Itinerary;
