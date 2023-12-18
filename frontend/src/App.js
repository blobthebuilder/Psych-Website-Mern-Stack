import Survey from "./pages/Survey.js";
import Results from "./pages/ResultsPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Results />}
          />
          <Route
            path="/results"
            element={<Results />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
