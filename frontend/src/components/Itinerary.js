import React from "react";

function Itinerary({ onNext }) {
  return (
    <div
      className="itinerary"
      id="flight">
      <div className="itineraryGroup">
        <div className="itineraryContainer">
          <div className="itinerarySuggested">
            <h1 className="title">Flight</h1>
          </div>
        </div>
        <div className="itineraryContainer">
          <div className="itinerarySuggested">
            <input
              type="radio"
              name="flightBtn"
              className="bigCheckbox"
            />
          </div>
          <div className="itineraryBox">
            <div className="innerItineraryBox">
              <strong
                className="itineraryTitle"
                name="flightTitle"></strong>
              <p
                name="flightFeature1"
                className="itineraryDescription"></p>
              <p name="flightFeature2"></p>
              <p
                name="flightFeature3"
                className="itineraryReview"></p>
              <p
                name="flightEcoLogo"
                className="ecoLogo">
                Eco-friendly
              </p>
            </div>
          </div>
          <div className="itineraryEco">
            <p className="flightSuggested suggested"></p>
          </div>
        </div>
        <div className="itineraryContainer">
          <div className="itinerarySuggested">
            <input
              type="radio"
              name="flightBtn"
              className="bigCheckbox"
            />
          </div>
          <div className="itineraryBox">
            <div className="innerItineraryBox">
              <strong
                className="itineraryTitle"
                name="flightTitle"></strong>
              <p
                name="flightFeature1"
                className="itineraryDescription"></p>
              <p name="flightFeature2"></p>
              <p
                name="flightFeature3"
                className="itineraryReview"></p>
              <p
                name="flightEcoLogo"
                className="ecoLogo">
                Eco-friendly
              </p>
            </div>
          </div>
          <div className="itineraryEco">
            <p className="flightSuggested suggested"></p>
          </div>
        </div>
        <div className="itineraryContainer">
          <div className="itinerarySuggested">
            <input
              type="radio"
              name="flightBtn"
              className="bigCheckbox"
            />
          </div>
          <div className="itineraryBox">
            <div className="innerItineraryBox">
              <strong
                className="itineraryTitle"
                name="flightTitle"></strong>
              <p
                name="flightFeature1"
                className="itineraryDescription"></p>
              <p name="flightFeature2"></p>
              <p
                name="flightFeature3"
                className="itineraryReview"></p>
              <p
                name="flightEcoLogo"
                className="ecoLogo">
                Eco-friendly
              </p>
            </div>
          </div>
          <div className="itineraryEco">
            <p className="flightSuggested suggested"></p>
          </div>
        </div>
        <div className="itineraryContainer">
          <div className="itinerarySuggested">
            <input
              type="radio"
              name="flightBtn"
              className="bigCheckbox"
            />
          </div>
          <div className="itineraryBox">
            <div className="innerItineraryBox">
              <strong
                className="itineraryTitle"
                name="flightTitle"></strong>
              <p
                name="flightFeature1"
                className="itineraryDescription"></p>
              <p name="flightFeature2"></p>
              <p
                name="flightFeature3"
                className="itineraryReview"></p>
              <p
                name="flightEcoLogo"
                className="ecoLogo">
                Eco-friendly
              </p>
            </div>
          </div>
          <div className="itineraryEco">
            <p className="flightSuggested suggested"></p>
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
