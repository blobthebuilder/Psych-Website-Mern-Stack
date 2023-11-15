import React from "react";
import ConsentForm from "./ConsentForm";

function ConsentFormPage({ onNext, onBack }) {
  return (
    <div className="consentForm">
      <ConsentForm />
      <button
        type="button"
        className="button"
        onClick={onBack}>
        No, I do not consent to participate in this study (You will exit the
        survey).
      </button>
      <button
        type="button"
        onClick={onNext}
        className="button">
        Yes, I consent to participate in this study.
      </button>
    </div>
  );
}

export default ConsentFormPage;
