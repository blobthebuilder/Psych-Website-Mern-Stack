import { useEffect, useState } from "react";
import PersonalityHeader from "../components/PersonalityHeader";

function App() {
  const [message, setMessage] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    fetch("https://psych-website.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <PersonalityHeader></PersonalityHeader>
    </div>
  );
}

export default App;
