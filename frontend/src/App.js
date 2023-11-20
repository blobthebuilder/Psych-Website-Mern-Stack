import { useEffect, useState } from "react";
import PersonalityHeader from "./components/PersonalityHeader";
import LandingPage from "./components/LandingPage";
import ConsentFormPage from "./components/ConsentFormPage";
import GeneralInstructions1 from "./components/GeneralInstructions1";
import GeneralInstructions2 from "./components/GeneralInstructions2";
import GeneralInstructions3 from "./components/GeneralInstructions3";
import Introduction from "./components/Introduction";
import Question1 from "./components/Question1";
import Question2A from "./components/Question2A";
import Question2B from "./components/Question2B";
import Question2C from "./components/Question2C";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import GreenQuestion from "./components/GreenQuestion";
import Demographics from "./components/Demographics";
import SubmitPage from "./components/SubmitPage";
import Loading from "./components/Loading";
import Instructions1 from "./components/Instructions1.js";
import Instructions2 from "./components/Instructions2.js";
import AttentionCheck from "./components/AttentionCheck";
import AttentionCheckAnswer from "./components/AttentionCheckAnswer";
import Itinerary from "./components/Itinerary.js";
import FollowupQuestions1 from "./components/FollowupQuestions.js";
import FollowupQuestions2 from "./components/FollowupQuestions2.js";
import FollowupQuestions3 from "./components/FollowupQuestions3.js";
import FollowupQuestionsGreen from "./components/FollowupQuestionsGreen.js";
import AlgorithmKnowledge from "./components/AlgorithmKnowledge.js";
import AlgorithmAwareness from "./components/AlgorithmAwareness.js";
import End from "./components/End.js";

import {
  shuffleAfternoon,
  shuffleHotels,
  shuffleRestaurants,
  shuffleVacations,
  shuffleActivities,
  shuffleAccommodation,
  shuffleCommunication,
  shuffleCuisine,
  randomizeItineraryFeatures,
  randomizeRecommendedAndEco,
} from "./utils.js";
function App() {
  const [step, setStep] = useState(1);
  const [showHeader, setShowHeader] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [hotelsArr, setHotelsArr] = useState([]);
  const [afternoonArr, setAfternoonArr] = useState([]);
  const [restaurantArr, setRestaurantArr] = useState([]);
  const [vacationsArr, setVacationsArr] = useState([]);
  const [activitiesArr, setActivitiesArr] = useState([]);
  const [accommodationArr, setAccommodationArr] = useState([]);
  const [communicationArr, setCommunicationArr] = useState([]);
  const [cuisineArr, setCuisineArr] = useState([]);

  const [itineraryFeatures, setItineraryFeatures] = useState([]);
  const [recommendedAndEco, setRecommendedAndEco] = useState([]);

  const [agent1, setAgent1] = useState("Personal");
  const [agent2, setAgent2] = useState("General");
  const [agent3, setAgent3] = useState("Unprogrammed");

  const [curAgent, setCurAgent] = useState("Personal");
  const [attentionCheckSelection, setAttentionCheckSelection] =
    useState("null");

  const handleNext = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const reload = () => {
    window.location.reload(true);
  };

  const handleNextChangeHeader = () => {
    handleNext();
    setShowHeader(!showHeader);
  };

  const handleAttentionCheckChange = (value) => {
    setAttentionCheckSelection(value);
  };

  const startSurvey = () => {
    setCurAgent(agent1);
    setRecommendedAndEco(randomizeRecommendedAndEco);
    handleNext();
  };

  // show alert when closing or refreshing
  /*
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ""; // Legacy method for cross browser support
    }
    return ""; // Legacy method for cross browser support
  };
  */

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/data");
        const json = await res.json();

        if (res.ok) {
          setTotalUsers(json[0].totalUsers);
        } else {
          throw Error;
        }
      } catch (error) {
        console.log("Fetch failed");
      }
    };

    setHotelsArr(shuffleHotels);
    setAfternoonArr(shuffleAfternoon);
    setRestaurantArr(shuffleRestaurants);
    setVacationsArr(shuffleVacations);
    setActivitiesArr(shuffleActivities);
    setAccommodationArr(shuffleAccommodation);
    setCommunicationArr(shuffleCommunication);
    setCuisineArr(shuffleCuisine);
    setItineraryFeatures(randomizeItineraryFeatures);

    fetchUsers();
    if (totalUsers % 6 === 0) {
      setAgent1("Personal");
      setAgent2("General");
      setAgent3("Unprogrammed");
    } else if (totalUsers % 6 === 1) {
      setAgent1("Personal");
      setAgent2("Unprogrammed");
      setAgent3("General");
    } else if (totalUsers % 6 === 2) {
      setAgent1("General");
      setAgent2("Personal");
      setAgent3("Unprogrammed");
    } else if (totalUsers % 6 === 3) {
      setAgent1("General");
      setAgent2("Unprogrammed");
      setAgent3("Personal");
    } else if (totalUsers % 6 === 4) {
      setAgent1("Unprogrammed");
      setAgent2("General");
      setAgent3("Personal");
    } else if (totalUsers % 6 === 5) {
      setAgent1("Unprogrammed");
      setAgent2("Pesronal");
      setAgent3("General");
    }
  }, [totalUsers, agent1]);

  return (
    <div className="App">
      <p>Test: {totalUsers}</p>
      {showHeader && <PersonalityHeader />}
      {step === 1 && <LandingPage onNext={startSurvey} />}
      {step === 2 && (
        <ConsentFormPage
          onNext={handleNext}
          onBack={reload}
        />
      )}
      {step === 3 && (
        <GeneralInstructions1
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 4 && (
        <GeneralInstructions2
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 5 && (
        <GeneralInstructions3
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 6 && <Introduction onNext={handleNextChangeHeader} />}
      {step === 7 && <Question1 onNext={handleNext} />}
      {step === 8 && (
        <GreenQuestion
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 9 && (
        <Question2A
          onNext={handleNext}
          onBack={handleBack}
          arr={hotelsArr}
        />
      )}
      {step === 10 && (
        <Question2B
          onNext={handleNext}
          onBack={handleBack}
          arr={afternoonArr}
        />
      )}
      {step === 11 && (
        <Question2C
          onNext={handleNext}
          onBack={handleBack}
          arr={restaurantArr}
        />
      )}
      {step === 12 && (
        <Question3
          onNext={handleNext}
          onBack={handleBack}
          vacationsArr={vacationsArr}
          activitiesArr={activitiesArr}
          accommodationArr={accommodationArr}
          communicationArr={communicationArr}
          cuisinesArr={cuisineArr}
        />
      )}
      {step === 13 && (
        <Question4
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 14 && (
        <Demographics
          onNext={handleNextChangeHeader}
          onBack={handleBack}
        />
      )}
      {step === 15 && <SubmitPage onNext={handleNext} />}
      {step === 16 && <Loading onNext={handleNext} />}
      {step === 17 && (
        <Instructions1
          onNext={handleNext}
          agent={agent1}
        />
      )}
      {step === 18 && (
        <Instructions2
          onNext={handleNext}
          agent={agent1}
        />
      )}
      {step === 19 && (
        <AttentionCheck
          onNext={handleNext}
          agent={agent1}
          onRadioChange={handleAttentionCheckChange}
        />
      )}
      {step === 20 && (
        <AttentionCheckAnswer
          onNext={handleNext}
          selection={attentionCheckSelection}
          curAgent={curAgent}
        />
      )}
      {step === 21 && (
        <Itinerary
          onNext={handleNext}
          type={"Flight"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 22 && (
        <Itinerary
          onNext={handleNext}
          type={"Rental Car"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 23 && (
        <Itinerary
          onNext={handleNext}
          type={"Hotel"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 24 && (
        <Itinerary
          onNext={handleNext}
          type={"Dinner"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 25 && (
        <Itinerary
          onNext={handleNext}
          type={"Lunch"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 26 && (
        <Itinerary
          onNext={handleNext}
          type={"Breakfast"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 27 && (
        <Itinerary
          onNext={handleNext}
          type={"Museums"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 28 && (
        <Itinerary
          onNext={handleNext}
          type={"Markets"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 29 && (
        <Itinerary
          onNext={handleNext}
          type={"Flamenco Shows"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 30 && (
        <Itinerary
          onNext={handleNext}
          type={"Public Transportation (Short)"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 31 && (
        <Itinerary
          onNext={handleNext}
          type={"Public Transportation (Long)"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 32 && (
        <Itinerary
          onNext={handleNext}
          type={"Coffee"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 33 && (
        <Itinerary
          onNext={handleNext}
          type={"Bakery"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 34 && (
        <Itinerary
          onNext={handleNext}
          type={"Night Life"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 35 && (
        <Itinerary
          onNext={handleNext}
          type={"Bars"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 36 && (
        <Itinerary
          onNext={handleNext}
          type={"Groceries"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 37 && (
        <Itinerary
          onNext={handleNext}
          type={"Souveneirs"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 38 && (
        <Itinerary
          onNext={handleNext}
          type={"Shopping"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 39 && (
        <Itinerary
          onNext={handleNext}
          type={"International Phone Service"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 40 && (
        <Itinerary
          onNext={handleNext}
          type={"Currency Exchange"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 41 && (
        <Itinerary
          onNext={handleNext}
          type={"Luggage"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 42 && (
        <Itinerary
          onNext={handleNext}
          type={"Day Trip"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 43 && (
        <Itinerary
          onNext={handleNext}
          type={"Travel Insurance"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 44 && (
        <Itinerary
          onNext={handleNext}
          type={"Travel Plug Adapter"}
          features={itineraryFeatures}
          recommendedAndEco={recommendedAndEco}
        />
      )}
      {step === 45 && (
        <FollowupQuestions1
          onNext={handleNext}
          agent={agent1}
        />
      )}
      {step === 46 && (
        <FollowupQuestions2
          onNext={handleNext}
          agent={agent1}
        />
      )}
      {step === 47 && (
        <FollowupQuestions3
          onNext={handleNext}
          agent={agent1}
        />
      )}
      {step === 48 && (
        <FollowupQuestionsGreen
          onNext={handleNext}
          agent={agent1}
        />
      )}
      {step === 49 && <AlgorithmKnowledge onNext={handleNext} />}
      {step === 50 && <AlgorithmAwareness onNext={handleNext} />}
      {step === 51 && <End />}
    </div>
  );
}

export default App;
