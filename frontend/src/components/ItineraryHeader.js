import React from "react";

function ItineraryHeader({ agent }) {
  return (
    <div>
      {agent.length === 8 && (
        <header className="agentHeader">
          <h1 className="title agentTitle">
            Personal Travel Agent Instructions
          </h1>
          <p
            id="agentSubTitle1"
            className="instructions header">
            Below is your <strong>personalized travel itinerary</strong>.{" "}
            <i>Smart Traveler</i> has identified the top four options for
            flights, rental cars, hotels, restaurants, shopping, activities, and
            more, for your trip.
          </p>
          <p
            id="agentSubTitle2"
            className="instructions header">
            The selection that is <strong>highlighted</strong> represents the
            selections that Smart Traveler recommends based on your personality
            assessment. In other words, the highlighted selection is the option
            Smart Traveler predicts{" "}
            <strong>
              <i>you</i>
            </strong>{" "}
            are most likely to enjoy.
          </p>
          <p
            id="agentSubTitle3"
            className="instructions header">
            Please indicate whether you will choose to maintain the selection
            made by your <strong>personal travel agent</strong>, or click on an
            alternative option if you would prefer to make a different
            selection.
          </p>
        </header>
      )}
      {agent.length === 7 && (
        <header className="agentHeader">
          <h1 className="title agentTitle">
            General Travel Agent Instructions
          </h1>
          <p
            id="agentSubTitle1"
            className="instructions header">
            Below is the <strong>general travel itinerary</strong>.{" "}
            <i>Smart Traveler</i> has identified the top four options for
            flights, rental cars, hotels, restaurants, shopping, activities, and
            more, for your trip.
          </p>
          <p
            id="agentSubTitle2"
            className="instructions header">
            The selection that is highlighted represents the selections that{" "}
            <i>Smart Traveler</i> recommends based on previous users'
            personality assessments. In other words, the highlighted selection
            is the option Smart Traveler predicts{" "}
            <strong>
              <i>previous users</i>
            </strong>{" "}
            are most likely to enjoy.
          </p>
          <p
            id="agentSubTitle3"
            className="instructions header">
            Please indicate whether you will choose to maintain the selection
            made by the <strong>general travel agent</strong>, or click on an
            alternative option if you would prefer to make a different
            selection.
          </p>
        </header>
      )}
      {agent.length === 12 && (
        <header className="agentHeader">
          <h1 className="title agentTitle">
            Unprogrammed Travel Agent Instructions
          </h1>
          <p
            id="agentSubTitle1"
            className="instructions header">
            Below is the <strong>unprogrammed travel itinerary</strong>. Smart
            Traveler has identified the top four options for flights, rental
            cars, hotels, restaurants, shopping, activities, and more, for your
            trip.
          </p>
          <p
            id="agentSubTitle2"
            className="instructions header">
            The selection that is highlighted was randomly selected by Smart
            Traveler. In other words, the highlighted selection is not related
            to any personal assessments.
          </p>
          <p
            id="agentSubTitle3"
            className="instructions header">
            Please indicate whether you will choose to maintain the selection
            made by the <strong>unprogrammed travel agent</strong>, or click on
            an alternative option if you would prefer to make a different
            selection.
          </p>
        </header>
      )}
    </div>
  );
}

export default ItineraryHeader;
