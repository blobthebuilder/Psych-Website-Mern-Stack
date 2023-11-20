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

    fetchUsers();
  }, [totalUsers]);

  return (
    <div className="App">
      <p>Test: {totalUsers}</p>
      {showHeader && <PersonalityHeader />}
      {step === 1 && <LandingPage onNext={handleNext} />}
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
      {step === 17 && <Instructions1 onNext={handleNext} />}
      {step === 18 && <Instructions2 onNext={handleNext} />}
      {step === 19 && <AttentionCheck onNext={handleNext} />}
      {step === 20 && <AttentionCheckAnswer onNext={handleNext} />}
      {step === 21 && <Itinerary onNext={handleNext} />}
      {step === 22 && <FollowupQuestions1 onNext={handleNext} />}
      {step === 23 && <FollowupQuestions2 onNext={handleNext} />}
      {step === 24 && <FollowupQuestions3 onNext={handleNext} />}
      {step === 25 && <FollowupQuestionsGreen onNext={handleNext} />}
      {step === 26 && <AlgorithmKnowledge onNext={handleNext} />}
      {step === 27 && <AlgorithmAwareness onNext={handleNext} />}
      {step === 28 && <End />}
    </div>
  );
}

export default App;
