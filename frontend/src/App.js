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

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const reload = () => {
    window.location.reload(true);
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

  return (
    <div className="App">
      <PersonalityHeader />
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
      {step === 6 && <Introduction onNext={handleNext} />}
      {step === 7 && <Question1 onNext={handleNext} />}
      {step === 8 && <GreenQuestion onNext={handleNext} />}
      {step === 9 && <Question2A onNext={handleNext} />}
      {step === 10 && <Question2B onNext={handleNext} />}
      {step === 11 && <Question2C onNext={handleNext} />}
      {step === 12 && <Question3 onNext={handleNext} />}
      {step === 13 && <Question4 onNext={handleNext} />}
      {step === 14 && <Demographics onNext={handleNext} />}
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
