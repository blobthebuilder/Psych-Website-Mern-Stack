import { useEffect, useState } from "react";
import PersonalityHeader from "./components/PersonalityHeader";
import LandingPage from "./components/LandingPage";
import ConsentFormPage from "./components/ConsentFormPage";

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
    </div>
  );
}

export default App;
