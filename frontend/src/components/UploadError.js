import React from "react";

function UploadError({ errorMsg, onDownload }) {
  return (
    <div className="consentForm">
      <p className="instructions">
        Sorry, an error happened while uploading your data: {errorMsg}
      </p>
      <p className="instructions">
        We are having trouble saving your data. To save your data and obtain
        your Prolific completion code, please click the button to download your
        data as a .csv file. You can upload your completed data file to the link
        below. After uploading your data, you will be provided with the Prolific
        completion code.
      </p>
      <p className="instructions">
        Please do not edit the data file before uploading it.
      </p>
      <p>
        To upload your data and receive your completion code, please fill out
        the form at the link below. Your responses to this form are anonymous
        and we will not ask for additional information besides your Prolific ID:{" "}
        <a
          href="https://ucsb.co1.qualtrics.com/jfe/form/SV_4GGTrUGqG6iW3X0"
          target="_blank"
          rel="noreferrer noopener">
          https://ucsb.co1.qualtrics.com/jfe/form/SV_4GGTrUGqG6iW3X0
        </a>
      </p>
      <button
        className="button"
        onClick={onDownload}>
        Download CSV
      </button>
    </div>
  );
}

export default UploadError;
