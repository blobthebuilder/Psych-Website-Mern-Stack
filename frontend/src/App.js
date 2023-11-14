import { useEffect, useState } from "react";
import PersonalityHeader from "./components/PersonalityHeader";
import LandingPage from "./components/LandingPage";

function App() {
  const [step, setStep] = useState(1);
  const [users, setUsers] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    fetch("https://psych-website.onrender.com/api/data")
      .then((res) => res.json())
      .then((data) => setUsers(data.totalUsers));
  }, []);
  const incUsers = () => {
    fetch("https://psych-website.onrender.com/api/data", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setUsers(data.totalUsers));
  };
  return (
    <div className="App">
      <PersonalityHeader />
      {step === 1 && <LandingPage onNext={handleNext} />}
      <h1>Users: {users}</h1>
      <button onClick={incUsers} />
    </div>
  );
}

export default App;
