import React, { useState, useEffect } from "react";

function Loading({ onNext }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div class="loading">
      <p>MAKING YOUR AGENT</p>
      <p class="instructions">
        Your answers to the personal assessment will be used to program your
        personal travel agent. Please continue to the next page to test the
        first version of the software.
      </p>
      {!show && (
        <div
          class="loader"
          id="loader"></div>
      )}
      {show && (
        <button
          type="button"
          onClick={onNext}
          id="loadingBtn"
          class="button">
          Next
        </button>
      )}
    </div>
  );
}

export default Loading;
