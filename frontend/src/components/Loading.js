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
    <div className="loading">
      <p>MAKING YOUR AGENT</p>
      <p className="instructions">
        Your answers to the personal assessment will be used to program your
        personal travel agent. Please continue to the next page to test the
        first version of the software.
      </p>
      {!show && (
        <div
          className="loader"
          id="loader"></div>
      )}
      {show && (
        <button
          type="button"
          onClick={onNext}
          id="loadingBtn"
          className="button">
          Next
        </button>
      )}
    </div>
  );
}

export default Loading;
